import { getLocalImage } from "../../utils/image";

it("get a desktop jpg image path with default parameters", () => {
  const image = getLocalImage("image");
  expect(image).toBe(
    `${process.env.PUBLIC_URL}/assets/images/image-desktop.jpg`
  );
});

it("get a correct image path with  parameters", () => {
  const image = getLocalImage("image", "mobile", "png");
  expect(image).toBe(
    `${process.env.PUBLIC_URL}/assets/images/image-mobile.png`
  );
});
