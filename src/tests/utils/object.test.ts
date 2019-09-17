import { getObjectKeys } from "../../utils/object";

test("test getObjectKeys", () => {
  const obj = { one: 1, two: 2 };
  const keys = ["one", "two"];
  const resKeys = getObjectKeys(obj);
  expect(resKeys).toEqual(keys);
});
