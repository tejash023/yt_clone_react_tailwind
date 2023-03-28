import React from "react";
import moment from "moment";
import noToString from "../utils/noToString";

const VideoCard = ({ info }) => {
  console.log("info", info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="p-2 m-2 w-72 rounded">
      <img
        className="rounded-lg shadow-lg"
        alt="thumnails"
        src={thumbnails.medium.url}
      />
      <div>
        <p className="font-bold line-clamp-2 my-2">{title}</p>
        <p className="font-medium text-sm">{channelTitle}</p>
      </div>
      <div className="flex items-center gap-1 py-1">
        <p className="text-sm ">{noToString(statistics.viewCount)}</p>
        <p className="text-sm mx-2">{moment(publishedAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default VideoCard;
