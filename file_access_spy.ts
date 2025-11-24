import { IFileAccess } from "./IFile_access";
import { FileAccess } from "./file_access";

export class FileAccessSpy implements IFileAccess {

  private real: FileAccess;
  callCount = 0;
  returnedValues: number[] = [];

  constructor(path: string) {
    this.real = new FileAccess(path);
  }

  async readNumbers(): Promise<number[]> {
    this.callCount++;
    const values = await this.real.readNumbers();
    this.returnedValues = [...values];
    return values;
  }
}
