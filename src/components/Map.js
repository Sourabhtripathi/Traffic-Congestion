import React from 'react';
import { withScriptjs, withGoogleMap,GoogleMap, Marker,TrafficLayer } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    <TrafficLayer autoUpdate />
  </GoogleMap>
))

export default MyMapComponent;
