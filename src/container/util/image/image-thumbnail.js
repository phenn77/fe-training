function retrieveImgUrl(directory) {
  let imgUrl;

  const DEFAULT_PICTURE_PATH =
    process.env.REACT_APP_BE_URL + `defaultPicture/${directory}/`;

  if (directory === "album" || directory === "single") {
    imgUrl =
      process.env.REACT_APP_BE_URL + `defaultPicture/all/${directory}.jpg`;
  } else {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    imgUrl = DEFAULT_PICTURE_PATH + randomNumber.toString() + ".jpg";
  }

  return imgUrl;
}

const ImageThumbnail = (props) => {
  let imgUrl;
  if (props.directory === "picture") {
    imgUrl = process.env.REACT_APP_BE_URL + props.result.imagePath;
  } else {
    imgUrl = retrieveImgUrl(props.directory);

    if (props.result.pictures && props.result.pictures.length > 0) {
      imgUrl =
        process.env.REACT_APP_BE_URL + `${props.result.pictures[0].imagePath}`;
    }
  }

  return (
    <img
      src={imgUrl}
      className="w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-48 xl:h-48 rounded-xl object-fill"
      alt={props.result.name}
    />
  );
};

export default ImageThumbnail;
