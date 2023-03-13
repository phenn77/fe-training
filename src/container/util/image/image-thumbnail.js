import { useNavigate } from "react-router";

function retrieveImgUrl(props) {
  let imgUrl;
  if (props.directory === "album" || props.directory === "single") {
    imgUrl =
      process.env.REACT_APP_BE_URL +
      `defaultPicture/all/${props.directory}.jpg`;
  } else if (props.result.pictures && props.result.pictures.length > 0) {
    imgUrl =
      process.env.REACT_APP_BE_URL + `${props.result.pictures[0].imagePath}`;
  } else {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    imgUrl =
      process.env.REACT_APP_BE_URL +
      `defaultPicture/${props.directory}/` +
      randomNumber.toString() +
      ".jpg";
  }

  return imgUrl;
}

const ImageThumbnail = (props) => {
  const navigate = useNavigate();

  const directToModel = (id, name, image) => {
    navigate(`/${props.directory}/view`, {
      state: { id: id, name: name, imgUrl: image },
    });
  };

  const imgUrl = retrieveImgUrl(props);

  return (
    <img
      src={imgUrl}
      className="w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-48 xl:h-48 rounded-xl object-fill"
      alt={props.result.name}
      onClick={() => directToModel(props.result._id, props.result.name, imgUrl)}
    />
  );
};

export default ImageThumbnail;
