import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import Body from "./components/Body";
import Header from "./components/Header";
import "./input.css";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchByName from "./components/SearchByName";
import VideosContainer from "./components/VideosContainer";
import SearchedVideoList from "./components/SearchedVideoList";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
      {
        path: "search/:name",
        element: <SearchByName />,
      },
      {
        path: ":id",
        element: <WatchPage />,
      },
      //   {
      //     path: "results/:suggestion",
      //     element: <SearchedVideoList />,
      //   },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
