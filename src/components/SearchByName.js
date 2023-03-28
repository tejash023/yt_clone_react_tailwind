import React, { useEffect, useState } from "react";
import { YT_SEARCH } from "../utils/constant";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchByName = () => {
  const { name } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);
  useEffect(() => {
    const getSearchVideos = async () => {
      const response = await fetch(
        YT_SEARCH + name + "&key=" + process.env.REACT_APP_GOOGLE_KEY
      );
      const json = await response.json();

      setSearchVideos(json.items);
    };

    getSearchVideos();
  }, [name]);

  return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row">
      {searchVideos.map((searchVideo) => (
        <Link
          key={searchVideo.id.videoId}
          to={"/watch?v=" + searchVideo.id.videoId}
        >
          <VideoCard info={searchVideo} />
        </Link>
      ))}
    </div>
  );
};

export default SearchByName;
