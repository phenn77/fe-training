const ImageGallery = (props) => {
  const imgUrl = process.env.REACT_APP_BE_URL + props.data.imagePath;

  let orientation,
    img = new Image();
  img.src = imgUrl;

  if (img.naturalWidth > img.naturalHeight) {
    // LANDSCAPE
    orientation = "w-48 h-40 md:w-40 md:h-32 lg:w-80 lg:h-64 xl:w-80 xl:h-64";
  } else if (img.naturalWidth < img.naturalHeight) {
    // PORTRAIT
    orientation = "w-40 h-48 md:w-32 md:h-40 lg:w-64 lg:h-80 xl:w-64 xl:h-80";
  } else {
    // THUMBNAIL
    orientation = "w-40 h-40 md:w-32 md:h-32 lg:w-64 lg:h-64 xl:w-64 xl:h-64";
  }

  const altName = props.data.imagePath.replace("uploads/", "");

  return (
    <img
      key={altName}
      src={imgUrl}
      className={orientation + " m-auto rounded-xl object-cover"}
      alt={altName}
      onClick={() => window.open(imgUrl, "_blank")}
    />
  );
};

export default ImageGallery;
