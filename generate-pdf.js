const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Cambia esta URL a la dirección local de tu servidor
    await page.goto('http://localhost:3000', {
        waitUntil: 'networkidle0',
    });

    // Espera hasta que el indicador de renderizado esté presente
    await page.waitForSelector('body[data-rendered="true"]');

    const pdfPath = path.resolve(__dirname, 'public/assets/document.pdf');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
    console.log(`PDF generado y guardado en ${pdfPath}`);
})();
