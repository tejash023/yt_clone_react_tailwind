import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigationBar = useSelector((store) => store.app.isMenuOpen);

  if (!navigationBar) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Originals</li>
        <li>Music</li>
      </ul>
      <ul className="pt-5">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Downloads</li>
        <li>Your Clips</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
