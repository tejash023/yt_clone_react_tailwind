import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchedVideoList from "./SearchedVideoList";

const SearchBar = ({ suggestions }) => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <div className="sticky bg-white py-4 px-2 w-3/4 shadow-lg rounded border border-gray-100 z-10">
      <ul>
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            className="flex items-center gap-2 px-3 py-1  hover:bg-slate-100"
            onClick={() => setSearchQuery(suggestion)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            {suggestion}
          </li>
        ))}
      </ul>
      <SearchedVideoList query={searchQuery} />
    </div>
  );
};

export default SearchBar;

//<SearchedVideoList query={searchQuery} />
