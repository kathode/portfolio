import "./App.scss";
import Logo from "./components/logo/Logo";
import Mapbox from "./components/map/Mapbox";
import "./components/map/Mapbox.scss";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="h-[50svh] bg-[#151b1d] flex justify-center">
        <div className="mapbox-container">
          <Mapbox />
        </div>
      </div>
    </div>
  );
}

export default App;
