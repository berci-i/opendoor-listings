import {useEffect, useState} from "react";

import {Listings} from "./components/Listings";
import {Map} from "./components/Map";
import {SearchBar} from "./components/SearchBar";

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleView = () => setShowMap((prev) => !prev);

  return (
    <div className="app-container">
      <SearchBar />
      <div className="main-section">
        {(showMap || !isMobile) && <Map />}
        {(!showMap || !isMobile) && <Listings />}
      </div>

      {isMobile && (
        <div onClick={toggleView} className="toggle-view-btn">
          {showMap ? "List" : "Map"}
        </div>
      )}
    </div>
  );
};

export default App;
