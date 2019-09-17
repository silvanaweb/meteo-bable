import { getOptionsFromMap } from "../../data/location.data";
import { locationsMock, optionsMock } from "../fixtures/location";

test("test getOptionsFromMap", () => {
  const options = getOptionsFromMap(locationsMock);
  expect(options).toEqual(optionsMock);
});
