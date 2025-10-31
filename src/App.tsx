import {Listings} from "./components/Listings";
import {Map} from "./components/Map";
import {SearchBar} from "./components/SearchBar";

function App() {
  return (
    <div className="app-container">
      <SearchBar />
      <div className="main-section">
        <Map />
        <Listings />
      </div>
    </div>
  );
}

export default App;
