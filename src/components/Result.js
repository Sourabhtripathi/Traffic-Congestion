import React, { useEffect } from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import Map from "./Map";
import TrafficLight from "./TrafficLight";

const Result = (props) => {
  useEffect(() => {
    if (!props.location.state) {
      props.history.push("/");
    }
  }, []);

  const onClick = () => {
    props.history.push("/");
  };

  return (
    <Grid
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Grid.Row style={{ height: "10vh" }}>
        <div
          style={{
            margin: "0 auto",
            paddingTop: "2vh",
          }}
        >
          <Button color="pink" onClick={onClick}>
            Change Selected Location
          </Button>
        </div>
      </Grid.Row>
      <Grid.Row style={{ height: "90vh" }}>
        <Grid.Column mobile={16} tablet={6} computer={10}>
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: "90%",
                  width: "90%",
                  margin: "auto",
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
            state={props.location.state}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={6}>
          <TrafficLight state={props.location.state} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Result;
