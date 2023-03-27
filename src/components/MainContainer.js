import React from "react";
import VideosContainer from "./VideosContainer";
import ButtonsList from "./ButtonsList";

const MainContainer = () => {
  return (
    <div>
      <ButtonsList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
