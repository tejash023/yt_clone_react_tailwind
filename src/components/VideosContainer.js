import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/constant";

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
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideosContainer;
