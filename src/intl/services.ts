import type { Message } from "./@types";
import type { Locales } from "./constants/langs";

export const get = async (locale: Locales): Promise<Message> => {
  try {
    const response = await fetch(`/messages/${locale}.json`);
    if (!response.ok) {
      throw Error();
    }
    return await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Unable to load messages");
  }
};
