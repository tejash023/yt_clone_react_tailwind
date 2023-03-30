import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_AUTOCOMPLETE } from "../utils/constant";
import SearchBar from "./SearchBar";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  useEffect(() => {
    const searchInputResult = async () => {
      const response = await fetch(YT_AUTOCOMPLETE + searchInput);
      const result = await response.json();
      setSuggestions(result[1]);
    };

    const timer = setTimeout(() => searchInputResult(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const dispatch = useDispatch();

  const handleNavigationMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed flex flex-row items-center justify-between p-2 top-0 w-full bg-white  px-4 shadow-sm ">
      <div className="flex items-center">
        <img
          onClick={() => handleNavigationMenu()}
          className="h-6 cursor-pointer hidden md:block"
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

      <div className="px-10 h-10 w-3/4 ">
        <div>
          <input
            className="hidden sm:block px-5 w-3/4 border border-gray-400 p-2 rounded-full focus:outline-none focus:scale-105 ease-in-out"
            type="text"
            placeholder="Search videos.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <SearchBar suggestions={suggestions} />
        )}
      </div>

      <div className="">
        <img
          className="h-8 w-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
export default Header;

/**
 * Debouncing
 *
 * Inside UseEffect
 *    make an api call after every key press
 *    butt if the difference between 2 API calls is < 200ms
 *    decline the API call
 *    less api call made as compared to normal request and hence increased performance
 *
 * Working behing the scenes
 *
 * Inside the useEffect - we are making the api call after every 200ms
 * but if the difference between 2 keypress is less than 200 ms, we are clearing the setTimeOut as
 * return is called only when the component is unmounted and it clears the setTimeout hence no api calls * made
 *
 *
 */
