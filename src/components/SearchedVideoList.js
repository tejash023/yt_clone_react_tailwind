import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { YT_SEARCH } from "../utils/constant";

const SearchedVideoList = ({ query }) => {
  console.log("query", query);
  const [searchVideos, setSearchVideos] = useState([]);

  console.log(searchVideos);
  useEffect(() => {
    const getSearchVideos = async () => {
      const response = await fetch(
        YT_SEARCH + query + "&key=" + process.env.REACT_APP_GOOGLE_KEY
      );
      const json = await response.json();

      setSearchVideos(json.items);
    };

    getSearchVideos();
  }, []);
  return <div></div>;
};

export default SearchedVideoList;
