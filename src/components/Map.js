import React from 'react';
import { withScriptjs, withGoogleMap,GoogleMap, Marker,TrafficLayer } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 23.231248, lng: 77.432639 }}
    
  >
    {props.isMarkerShown && <Marker position={{ lat: 23.231248, lng: 77.432639 }} />}
    <TrafficLayer autoUpdate />
  </GoogleMap>
))

export default MyMapComponent;
