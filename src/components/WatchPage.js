import React from "react";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="p-4 px-5 w-full h-full">
      <ReactPlayer
        className=" md:w-full aspect-video md:aspect-square"
        url={"https://www.youtube.com/embed/" + searchParams.get("v")}
        controls="true"
        playing="true"
      />
    </div>
  );
};

export default WatchPage;
