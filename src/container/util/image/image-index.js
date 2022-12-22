import { useNavigate, useResolvedPath } from "react-router-dom";

const ImageIndex = (props) => {
  const currentDirectory = useResolvedPath("").pathname;
  const directory = currentDirectory.replace("/", "");
  const navigate = useNavigate();

  const getInfo = (id, imgUrl) => {
    navigate(`${currentDirectory}/view`, {
      state: { id: id, directory: directory, imgUrl: imgUrl },
    });
  };

  const DEFAULT_PICTURE_PATH =
    process.env.REACT_APP_BE_URL + `defaultPicture/${directory}/`;

  let images = [];
  if (props.data && props.data.length > 0) {
    Object.values(props.data).map((result) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;

      let imgUrl = DEFAULT_PICTURE_PATH + randomNumber.toString() + ".jpg";
      if (result.pictures && result.pictures.length > 0) {
        imgUrl =
          process.env.REACT_APP_BE_URL + `${result.pictures[0].imagePath}`;
      }

      const img = (
        <div key={result._id} className="img-container">
          <img
            src={imgUrl}
            className="w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-48 xl:h-48 rounded-xl object-fill"
            alt={result.name}
            onClick={() => getInfo(result._id, imgUrl)}
          />

          <div className="relative text-center rounded-t-xl top-0 bottom-0 img-name">
            <p className="font-mono">{result.name.toUpperCase()}</p>
          </div>
        </div>
      );

      return images.push(img);
    });
  }

  return (
    <div className="grid flex justify-evenly px-8 py-8 data-container">
      {images}
    </div>
  );
};

export default ImageIndex;
