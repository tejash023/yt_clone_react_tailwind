import React from "react";
import Button from "./Button";

const buttonsList = [
  "All",
  "Music",
  "News",
  "India",
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
        <Button key={index} name={listItem} />
      ))}
    </div>
  );
};

export default ButtonsList;
