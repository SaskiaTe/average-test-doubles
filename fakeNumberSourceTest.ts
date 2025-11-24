import { FakeNumberSource } from "./fakeNumberSource";
import { Average } from "./Average";

Deno.test("mean with fake", async () => {
  const fake = new FakeNumberSource();
  fake.addFile("default", [1, 2, 3, 4]);

  const avg = new Average(fake);
  const result = await avg.computeMean();

  if (result !== 2.5) {
    throw new Error("wrong mean");
  }
});