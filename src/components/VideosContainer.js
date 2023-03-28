import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const videosList = await data.json();

    setVideos(videosList.items);
  };

  return !videos ? (
    "Loading...."
  ) : (
    <div className="flex flex-col sm:flex-wrap sm:flex-row">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
