import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {Room} from "material-icons";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 48.858093,
    longitude: -2.294694,
    zoom: 8
  });
  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPAPI}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        <p style={{fontSize:viewport.zoom * 10}}>HERE I AM</p>
        <Marker
          latitude={48.858093}
          longitude={2.294694}
          offsetLeft={-20}
          offsetTop={-10}
        >
         <Room style={{fontSize:viewport.zoom}} /> 
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
