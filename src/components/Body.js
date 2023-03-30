import React from "react";
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-[4.5rem]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
