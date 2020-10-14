import React from "react";
import { Statistic } from "semantic-ui-react";

import "./TrafficLight.css";

const TrafficLight = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5vh",
        marginLeft: "-35vw",
      }}
    >
      {new Array(4).fill("").map((_, index) => (
        <div
          key={index}
          style={{
            display: "inline",
          }}
        >
          <input
            type="radio"
            name="traffic-light-color"
            className="color1 "
            value="color1"
            style={{
              margin: "5vh 0vw",
            }}
          />
          <Statistic
            style={{
              marginLeft: "50vw",
            }}
          >
            <Statistic.Value>100</Statistic.Value>
            <Statistic.Label>Seconds Left</Statistic.Label>
          </Statistic>
        </div>
      ))}
    </div>
  );
};

export default TrafficLight;
