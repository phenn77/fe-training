import axios from "axios";
import { useEffect, useState } from "react";

const View = (props) => {
  const [data, setData] = useState();

  console.log(props.id);

  useEffect(() => {

    // const baseUrl = process.env.REACT_APP_BE_URL + `${state.directory}`;

    // const fetchData = async () => {
    //   const response = await axios.get(baseUrl + `/${state.id}`);
    //   setData(response.data);
    // };

    // fetchData().catch(console.error);
  }, []);

  return <div></div>;
};

export default View;
