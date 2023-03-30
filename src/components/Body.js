import React from "react";
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-20">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
