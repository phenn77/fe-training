const ImageOrientation = (props) => {
  let orientation,
    img = new Image();
  img.src = props.imgUrl;

  if (img.naturalWidth > img.naturalHeight) {
    // LANDSCAPE
    orientation = "w-48 h-40 md:w-40 md:h-32 lg:w-96 lg:h-80 xl:w-96 xl:h-80";
  } else if (img.naturalWidth < img.naturalHeight) {
    // PORTRAIT
    orientation = "w-40 h-48 md:w-32 md:h-40 lg:w-80 lg:h-96 xl:w-80 xl:h-96";
  } else {
    // THUMBNAIL
    orientation = "w-40 h-40 md:w-32 md:h-32 lg:w-80 lg:h-80 xl:w-64 xl:h-64";
  }

  return (
    <img
      src={props.imgUrl}
      className={orientation + " m-auto rounded-xl"}
      alt={props.imgName}
    />
  );
};

export default ImageOrientation;
