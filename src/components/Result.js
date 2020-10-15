import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Map from "./Map";
import TrafficLight from "./TrafficLight";

const Result = (props) => {
  useEffect(() => {
    if (!props.location.state) {
      props.history.push("/");
    }
  }, []);

  return (
    <Grid>
      <Grid.Row style={{ height: "100vh" }}>
        <Grid.Column mobile={16} tablet={6} computer={8}>
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "100vh" }} />}
            mapElement={<div style={{ height: `100%` }} />}
            state = {props.location.state}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={8}>
          <TrafficLight state = {props.location.state}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Result;
