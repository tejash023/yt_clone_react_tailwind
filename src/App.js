import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./input.css";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchByName from "./components/SearchByName";
import VideosContainer from "./components/VideosContainer";
import SearchedVideoList from "./components/SearchedVideoList";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <VideosContainer />,
//       },
//       {
//         path: "search/:name",
//         element: <SearchByName />,
//       },
//       {
//         path: ":id",
//         element: <WatchPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Header />
//         <RouterProvider router={appRouter}>
//           <Body />
//         </RouterProvider>
//       </div>
//     </Provider>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

/**
 * Head
 * Body
 * Sidebar
 *  Menu Items
 * MainContainer
 *  ButtonsList
 *  VideosContainer
 *    VideoCard
 */
