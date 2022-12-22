import { useNavigate } from "react-router";
import ImageThumbnail from "./image-thumbnail";

const ImageView = (props) => {
  const navigate = useNavigate();

  const directToAlbum = (id) => {
    console.log(id);
    navigate(`${props.directory}/album/view`, { state: { id: id } });
  };

  let images = [];
  Object.values(props.data).map((result) => {
    const img = (
      <div key={result._id} className="img-container">
        <ImageThumbnail
          directory={props.directory}
          result={result}
        />

        {props.directory !== "picture" && (
          <div className="relative text-center rounded-t-xl top-0 bottom-0">
            <p className="font-mono">{result.name.toUpperCase()}</p>
          </div>
        )}
      </div>
    );

    return images.push(img);
  });

  return (
    <div className="grid flex justify-evenly px-8 py-8 data-container">
      {images}
    </div>
  );
};

export default ImageView;
