import "./Map.scss";

import MapMock from "@/assets/MapMock.png";

export const Map = () => {
  return (
    <div className="map">
      <img src={MapMock} alt="Map" style={{height: "100vh", borderRadius: "8px"}} />
    </div>
  );
};

// import "mapbox-gl/dist/mapbox-gl.css";
// import "./Map.scss";

// import ReactMapGL, { NavigationControl, WebMercatorViewport } from "react-map-gl";
// import { useEffect, useRef, useState } from "react";

// export const Map = () => {
//   const mapRef = useRef(null);

//   // Define the bounding box
//   const bounds = [
//     [113.168632507324, 32.76449513699764], // [lng, lat] bottom‐left
//     [110.97136688232393, 34.13939719984384] // [lng, lat] top‐right
//   ];

//   // Compute viewport that fits the bounds
//   const [viewport, setViewport] = useState({
//       latitude: (34.13939719984384 + 32.76449513699764) / 2,
//       longitude: (113.168632507324 + 110.97136688232393) / 2,
//       width: "50vw",
//       height: "100%",
//       zoom: 10
//     });

//   useEffect(() => {
//     if (mapRef.current) {
//       const { width, height } = mapRef.current.getMap().getCanvas().getBoundingClientRect();
//       const vp = new WebMercatorViewport({ width, height })
//         .fitBounds(bounds, { padding: 20 });
//       setViewport(vp);
//     }
//   }, []); // run once after mount

//   return (
//     <div className="map" style={{ borderRadius: "8px", overflow: "hidden" }}>
//       <ReactMapGL
//         ref={mapRef}
//         {...viewport}
//         mapboxAccessToken={MAPBOX_TOKEN}
//         onMove={evt => setViewport(evt.viewState)}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         minZoom={viewport.zoom}
//         // optionally restrict further: maxBounds etc.
//       >
//         <NavigationControl position="top-right" />
//         {/* add markers, polygon overlays etc if you need */}
//       </ReactMapGL>
//     </div>
//   );
// };
