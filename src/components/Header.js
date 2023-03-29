import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_AUTOCOMPLETE } from "../utils/constant";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => searchInputResult(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const searchInputResult = async () => {
    const response = await fetch(YT_AUTOCOMPLETE + searchInput);
    const result = await response.json();
    console.log(result);
  };

  const dispatch = useDispatch();

  const handleNavigationMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-0.5  m-0.5 px-4 shadow-lg items-center">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => handleNavigationMenu()}
          className="h-6 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png"
          alt="nav-icon"
        />

        <a href="/">
          <img
            className="h-14 mx-2"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="flex col-span-10 px-10 h-8 ">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-none  "
          type="text"
          placeholder="Search videos.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className=" border border-gray-400 px-5 bg-gray-100 p-2 rounded-r-full">
          <FiSearch height="1.15rem" />
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
export default Header;
