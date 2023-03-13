import ImageThumbnail from "./image-thumbnail";

const ImageView = (props) => {
  let images = [];
  Object.values(props.data).map((result) => {
    const img = (
      <div className="img-container" key={result._id}>
        <ImageThumbnail directory={props.directory} result={result} />

        {props.directory !== "picture" && (
          <div className="relative text-center rounded-t-xl top-0 bottom-0 img-name">
            <p>{result.name.toUpperCase()}</p>
          </div>
        )}
      </div>
    );

    return images.push(img);
  });

  return (
    <div className="grid justify-evenly data-container">
      {images}
    </div>
  );
};

export default ImageView;
