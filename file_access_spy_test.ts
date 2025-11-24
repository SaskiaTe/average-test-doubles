import { FileAccessSpy } from "./file_access_spy";
import { Average } from "./Average";

Deno.test("spy tracks calls and values", async () => {
  const path = "./temp_numbers.txt";
  await Deno.writeTextFile(path, "3\n6\n9\n");

  const spy = new FileAccessSpy(path);
  const avg = new Average(spy);

  const result = await avg.computeMean();

  if (spy.callCount !== 1) {
    throw new Error("expected exactly one call");
  }

  if (JSON.stringify(spy.returnedValues) !== JSON.stringify([3, 6, 9])) {
    throw new Error("spy should log actual file values");
  }

  await Deno.remove(path);
});
