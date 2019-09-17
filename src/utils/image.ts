type ImageSize = "desktop" | "mobile";
export const getLocalImage = (
  name: string,
  size: ImageSize = "desktop",
  extension: "jpg" | "png" | "gif" = "jpg"
): string =>
  `${process.env.PUBLIC_URL}/assets/images/${name}-${size}.${extension}`;
