import { IFile_access } from "./IFile_access";
import {Deno} from "./deno.json";

export class FileAccess implements IFile_access {

  constructor(private path: string) {}

  public async readNumbers(): Promise<number[]> {
    const numbers: number[] = [];
    const content: string = await Deno.readTextFile(this.path);
    const lines: string[] = content.split("\n");

    for (const line of lines) {
      const n = Number.parseInt(line);
      if (!Number.isNaN(n)) {
        numbers.push(n);
      }
    }

    return numbers;
  }
}
