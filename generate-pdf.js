const puppeteer = require("puppeteer");
const path = require("path");
const { spawn } = require("node:child_process");
const treeKill = require("tree-kill");

const generate = async (page, urlPath, filename) => {
  await page.goto("http://localhost:3000/" + urlPath);
  await page.waitForSelector("body[data-loaded]");

  await page.pdf({
    path: path.resolve("public/assets/" + filename),
    format: "A4",
    margin: {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    },
  });
};

(async () => {
  const devServer = spawn("npm", ["start"]);

  try {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error("timeout exceeded")),
        60000,
      );

      devServer.stdout.on("data", (data) => {
        if (data.toString().includes("compiled successfully")) {
          clearTimeout(timeout);
          resolve();
        }
      });
    });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await generate(page, "", "leandro.cortese.en-US.pdf");
    await generate(page, "es-AR", "leandro.cortese.es-AR.pdf");

    treeKill(devServer.pid);
    await browser.close();
  } catch (error) {
    console.error(error);
    treeKill(devServer.pid);
    process.exit(1);
  }
})();
