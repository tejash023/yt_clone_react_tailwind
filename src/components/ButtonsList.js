import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const buttonsList = [
  "All",
  "Music",
  "News",
  "India",
  "IPL",
  "React",
  "USA",
  "Ukraine",
  "FIFA 23",
  "MSD",
];

const ButtonsList = () => {
  return (
    <div className="flex px-2">
      {buttonsList.map((listItem, index) => (
        <Link key={index} to={"/search/" + listItem}>
          <Button name={listItem} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonsList;
