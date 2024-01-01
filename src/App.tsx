import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Logo from "./components/logo/Logo";

mapboxgl.accessToken = "pk.eyJ1Ijoia2F0aG9kZSIsImEiOiJjbHFyZm4weXU0bDR6MmtucGV3YXNoeTg3In0.27-IO2S4uvWz4Lu2RkOhlA";

function App() {
  return (
    <div className="App">
      <Logo />
    </div>
  );
}

export default App;
