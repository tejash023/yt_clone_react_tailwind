import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YT_AUTOCOMPLETE } from "../utils/constant";

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
    <div className="fixed flex flex-col md:flex-row items-center justify-between p-2 top-0 w-full bg-white m-0.5 px-4 shadow-lg ">
      <div className="flex items-center">
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

      <div className=" px-10 h-10 w-3/4 ">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-full focus:outline-none focus:scale-105 ease-in-out"
            type="text"
            placeholder="Search videos.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="sticky bg-white py-4 px-2 w-[26rem] shadow-lg rounded border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex items-center gap-2 px-3 py-1  hover:bg-slate-100 "
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="">
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
