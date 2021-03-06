export const shrinkImage = (imagePath, size) => {
  const resizedImage = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games", `media/resize/${size}/-/games`);

  return resizedImage;
};
