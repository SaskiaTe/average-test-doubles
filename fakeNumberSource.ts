import { IFile_access } from "./IFile_access";

export class FakeNumberSource implements IFile_access {

  private files = new Map<string, number[]>();

  addFile(path: string, values: number[]): void {
    this.files.set(path, values);
  }

  async readNumbers(): Promise<number[]> {
    return this.files.get("default") ?? [];
  }
}
