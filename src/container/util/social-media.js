import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function retrieveIcon(iconType) {
  let icon;
  switch (iconType.toUpperCase()) {
    case "INSTAGRAM":
      icon = faInstagram;
      break;
    case "TWITTER":
      icon = faTwitter;
      break;
    case "WEBSITE":
      icon = faGlobe;
      break;
    default:
      icon = "";
      break;
  }

  return icon;
}

const SocialMedia = (props) => {
  let socialMedia = [];
  Object.values(props.data).map((result) => {
    const icon = (
      <div className="img-container" key={result.type}>
        <a href={result.url} target="_blank" rel="noreferrer" className="m-10">
          <FontAwesomeIcon
            icon={retrieveIcon(result.type)}
            className="fa-3x"
            fade
          />
        </a>
      </div>
    );

    return socialMedia.push(icon);
  });

  return <div className="flex justify-center">{socialMedia}</div>;
};

export default SocialMedia;
