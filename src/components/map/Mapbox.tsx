import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

const Mapbox = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(144.957821);
  const [lat, setLat] = useState(-37.840443);

  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    setTimeout(() => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/kathode/clqz32u2800fh01rj8p486vmt",
        center: [lng, lat],
        zoom: zoom,
        minZoom: 9,
        maxZoom: 15,
        pitch: 50,
        bearing: 0,
        maxBounds: [
          [144.86, -37.98], // Southwest coordinates (longitude, latitude) bottom left
          [145.25, -37.68], // Northeast coordinates (longitude, latitude) top right
        ],
      });

      map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }, 1000);
  });

  return <div ref={mapContainer} className="map-container h-[100%] w-[100%] rounded-xl" />;
};

export default Mapbox;
