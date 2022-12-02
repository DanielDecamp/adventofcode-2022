import { readFileSync } from "fs";

export default class InputLoader {
  static async LoadInput(filePath, replaceWith, splitWith) {
    const input = await readFileSync(filePath).toString();
    const cleanInput = input.replace(/\n/g, replaceWith);
    const data = cleanInput.split(splitWith);

    return data;
  }
}
