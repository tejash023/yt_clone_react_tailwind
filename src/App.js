import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./input.css";
import store from "./utils/store";

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
