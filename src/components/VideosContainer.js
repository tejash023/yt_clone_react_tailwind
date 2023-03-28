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
    console.log(videosList);
    setVideos(videosList.items);
  };

  return !videos ? (
    "Loading...."
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
