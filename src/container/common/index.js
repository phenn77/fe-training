import axios from "axios";
import { useState, useEffect } from "react";
import { useResolvedPath } from "react-router";
import ImageIndex from "../util/image/image-index";
import Pagination from "../util/pagination";

const Index = (props) => {
  const currentDirectory = useResolvedPath("").pathname.replace("/", "");
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = props.title;
    const baseUrl = process.env.REACT_APP_BE_URL + `${currentDirectory}`;

    const fetchData = async () => {
      const response = await axios.get(baseUrl);

      setData(response.data);
    };

    fetchData().catch(console.error);
  }, [currentDirectory, props.title]);

  return (
    <div>
      <ImageIndex data={data.data} />
      <Pagination totalPage={data.totalPage} />
    </div>
  );
};

export default Index;
