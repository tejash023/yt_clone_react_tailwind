import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/constant";

import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(data.items[0]);
    };
    getVideoDetails();
  }, [id]);

  return (
    <div className="p-4 px-5 md:w-[50rem] md:h-[28rem] ">
      <ReactPlayer
        className=""
        url={"https://www.youtube.com/embed/" + searchParams.get("v")}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
      />
      {videoDetail && (
        <div>
          <p className="text-xl font-semibold py-2">
            {videoDetail.snippet.title}
          </p>
          <div className="flex flex-col md:flex-row gap-1 justify-start md:items-center md:justify-between py-2">
            <p className="font-bold">{videoDetail.snippet.channelTitle}</p>
            <div className="flex items-center justify-between gap-1 py-2">
              <div className="flex items-center mr-4">
                <button className="bg-red-600 text-white rounded-l-full py-2 px-5 ">
                  <MdThumbUpOffAlt size="1.5rem" />
                </button>

                <button className="bg-red-600 text-white rounded-r-full py-2 px-5">
                  <MdThumbDownOffAlt size="1.5rem" />
                </button>
              </div>

              <button className="bg-slate-700 text-white rounded-full py-2 px-5">
                Subscibe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
