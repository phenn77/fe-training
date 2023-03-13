import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ImageGallery from "../util/image/image-gallery";
import ImageDisplay from "../util/image/image-display";
import ImageView from "../util/image/image-view";
import SocialMedia from "../util/social-media";

const View = () => {
  const { state } = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BE_URL + "artist";

    document.title = state.name;

    const fetchData = async () => {
      const response = await axios.get(baseUrl + `/${state.id}`);
      setData(response.data);
    };

    fetchData().catch(console.error);
  }, [state.id, state.name]);

  const fieldClass =
    "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4";
  const valueClass =
    "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";

  return (
    <div className="w=full">
      {data && (
        <div>
          {/* ARTIST SECTION */}
          <fieldset className="border-4 p-3 mb-5 rounded-t-xl">
            <legend className="text-center font-bold">ARTIST</legend>
            <div className="pb-4 items-center">
              <ImageDisplay imgUrl={state.imgUrl} imgName={data.name} />
            </div>
            <div className="grid grid-cols-2">
              <div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className={fieldClass}>NAME</label>
                  </div>
                  <div className="md:w-2/3">
                    <p className={valueClass}>{data.name}</p>
                  </div>
                </div>
                {data.alias && (
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className={fieldClass}>ALIAS</label>
                    </div>
                    <div className="md:w-2/3">
                      <p className={valueClass}>{data.alias}</p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className={fieldClass}>ORIGIN</label>
                  </div>
                  <div className="md:w-2/3">
                    <p className={valueClass} value={data.origin}>
                      {data.origin}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {data.socialMedia && data.socialMedia.length > 0 && (
              <fieldset className="border-4 p-3 mb-5 rounded-xl">
                <legend className="text-center font-bold">SOCIAL MEDIA</legend>

                <SocialMedia data={data.socialMedia} />
              </fieldset>
            )}

            {data.summary && (
              <fieldset className="border-4 p-3 mb-5 rounded-xl">
                <legend className="text-center font-bold">SUMMARY</legend>
                <div className="h-64 overflow-y-auto">
                  <p className="text-justify p-5">{data.summary}</p>
                </div>
              </fieldset>
            )}
          </fieldset>
          {/* ARTIST SECTION */}

          {/* MEMBER SECTION */}
          {data.members && data.members.length > 0 && (
            <fieldset className="border-4 p-3 mb-5">
              <legend className="text-center font-bold">MEMBER</legend>

              <ImageView data={data.members} directory="member" />
            </fieldset>
          )}
          {/* MEMBER SECTION */}

          {/* ALBUM SECTION */}
          {data.albums && data.albums.length > 0 && (
            <fieldset className="border-4 p-3 mb-5">
              <legend className="text-center font-bold">ALBUM</legend>

              <ImageView data={data.albums} directory="album" />
            </fieldset>
          )}
          {/* ALBUM SECTION */}

          {/* SINGLE SECTION */}
          {data.singles && data.singles.length > 0 && (
            <fieldset className="border-4 p-3 mb-5">
              <legend className="text-center font-bold">SINGLE</legend>

              <ImageView data={data.singles} directory="single" />
            </fieldset>
          )}
          {/* SINGLE SECTION */}

          {/* PICTURE SECTION */}
          {data.pictures && data.pictures.length > 0 && (
            <fieldset className="border-4 p-3 mb-5 rounded-b-xl">
              <legend className="text-center font-bold">PICTURE</legend>

              <div className="grid justify-evenly data-container">
                {Object.values(data.pictures).map((result, index) => {
                  return (
                    <div key={index}>
                      <ImageGallery data={result} />
                    </div>
                  );
                })}
              </div>
            </fieldset>
          )}
          {/* PICTURE SECTION */}
        </div>
      )}
    </div>
  );
};

export default View;
