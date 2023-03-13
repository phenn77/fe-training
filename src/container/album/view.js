import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ImageDisplay from "../util/image/image-display";

const View = () => {
  const { state } = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BE_URL + "album";

    document.title = state.name;

    const fetchData = async () => {
      const response = await axios.get(baseUrl + `/${state.id}`);
      setData(response.data);
    };

    fetchData().catch(console.error);
  }, [state.id, state.name]);

  return (
    <>
      {data && (
        <div className="border-4 rounded-xl min-h-full">
          <div className="flex grid-cols-2 album-container">
            {/* IMAGE PREVIEW */}
            <div className="flex border-r-4 w-2/5">
              <ImageDisplay imgUrl={state.imgUrl} imgName={data.name} />
            </div>
            {/* IMAGE PREVIEW */}

            {/* ALBUM INFORMATION */}
            <div className="pl-3 pt-3 w-3/5">
              {/* INFO */}
              <div className="h-2/5">
                <p className="font-bold text-5xl">
                  {data.name.toUpperCase()}
                </p>
                <p className="pt-2">{data.releaseYear}</p>

                {data.summary && (
                  <div className="pl-2 pr-5">
                    <fieldset className="border-4 rounded-lg">
                      <legend className="text-center font-bold">SUMMARY</legend>
                      <div className="h-64 overflow-y-auto">
                        <p className="text-justify m-5">{data.summary}</p>
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>
              {/* INFO */}

              {/* TRACKLIST */}
              <div className="h-3/5 overflow-y-auto py-5">
                {data.tracklist && data.tracklist.length > 0 && (
                  <div className="ml-3 mr-6 h-full overflow-y-auto relative rounded-xl">
                    <table className="w-full text-sm text-left bg-gray-300 text-gray-500 dark:text-gray-400 table-auto">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 px-6 w-2">
                            No.
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(data.tracklist).map((tl, index) => {
                          return (
                            <tr key={index} className="bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="py-4 px-6">{index + 1}</td>
                              <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {tl}
                              </th>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              {/* TRACKLIST */}
            </div>
            {/* ALBUM INFORMATION */}
          </div>
        </div>
      )}
    </>
  );
};

export default View;
