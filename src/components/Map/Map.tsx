import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.scss";

import MapMock from "@/assets/MapMock.png";

export const Map = () => {
  return (
    <div className="map">
      <img src={MapMock} alt="Map" style={{height: "100vh", borderRadius: "8px"}} />
    </div>
  );
};

// import ReactMapGL, {InteractiveMap} from "react-map-gl";

// import {useRef} from "react";
// export const Map = () => {
//   const mapRef = useRef<InteractiveMap>(null);

//   // Compute viewport that fits the bounds
//   const viewport = {
//     latitude: (34.13939719984384 + 32.76449513699764) / 2,
//     longitude: (113.168632507324 + 110.97136688232393) / 2,
//     zoom: 10,
//     width: "50vw",
//     height: "100%",
//   };

//   return (
//     <div className="map" style={{borderRadius: "8px", overflow: "hidden"}}>
//       <ReactMapGL
//         ref={mapRef}
//         {...viewport}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         minZoom={viewport.zoom}
//       >
//         {/* add markers, polygon overlays etc if you need */}
//       </ReactMapGL>
//     </div>
//   );
// };
