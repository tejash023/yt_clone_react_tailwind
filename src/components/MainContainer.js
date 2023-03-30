import React from "react";
import VideosContainer from "./VideosContainer";
import ButtonsList from "./ButtonsList";

const MainContainer = () => {
  return (
    <div className="w-full">
      <ButtonsList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
