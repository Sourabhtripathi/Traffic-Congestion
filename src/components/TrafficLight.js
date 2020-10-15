import React, {useState, useEffect} from "react";
import { Statistic } from "semantic-ui-react";
import api from '../api';
import "./TrafficLight.css";

const TrafficLight = ({state}) => {

  const [loading, setLoading] = useState(true);
  const [green, setGreen] = useState(0);

  useEffect(()=>{
    console.log(state);
    api.get(`/${state._id}`)
    .then(res=>{
      console.log(res);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err);
      setLoading(false);
    })
  },[]);

  if(loading) return <div>Loading...</div>

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
            className={index===green ? "color3" : "color1"}
            value={index===green ? "color3" : "color1"}
            style={{
              margin: "5vh 0vw",
            }}
          />
          <Statistic
            style={{
              marginLeft: "45vw",
            }}
            color = {index===green ? 'green': 'red'}
          >
            <Statistic.Value>100</Statistic.Value>
          </Statistic>
        </div>
      ))}
    </div>
  );
};

export default TrafficLight;
