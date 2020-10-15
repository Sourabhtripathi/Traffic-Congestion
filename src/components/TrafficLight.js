import React, { useState, useEffect } from "react";
import { Statistic, Loader } from "semantic-ui-react";
import api from "../api";
import "./TrafficLight.css";

let dummyData = [
  [5, 25, 20, 60],
  [0, 20, 34, 25],
  [20, 0, 34, 25],
  [34, 20, 0, 25],
  [25, 20, 34, 0],
];

const TrafficLight = ({ state }) => {
  const [loading, setLoading] = useState(true);
  const [green, setGreen] = useState(-1);
  const [timer, setTimer] = useState([0, 0, 0, 0]);

  useEffect(() => {
    getTimers(-1)
      .then((res) => {
        setLoading(false);
        let t = setTimers(res, -1, timer);

        controlTimer((green + 1) % 4, t);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state]);

  const controlTimer = (g, ti) => {
    let t;
    getTimers(g)
    .then(res=>{
      t = setTimers(res, g, ti);
    })
    .catch(err=>{
      console.log(err);
    })
    setGreen(g);
    setTimer(ti);
    let count = ti[g];
    let i=1;
    let interval = setInterval(()=>{
      let time = [...ti];
      for(let j=0 ; j<4 ; j++){
        time[j] = ti[j] - i;
      }
      i++;
      setTimer(time);
      if(i>count){
        controlTimer((g+1)%4, t);
        clearInterval(interval)
      }
    },1000);
    
  }

  const setTimers = (res, gr, ti) => {
    let g = (gr + 1) % 4;
    let timers = [...ti];
    // timers[g] = res.data[g];
    timers[g] = res.data.signal_time[g];

    let index;
    for (index = 0; index < 3; index++) {
      if (index === 0) {
        timers[(g + 1) % 4] = timers[g % 4];
      } else {
        timers[(g + index + 1) % 4] =
          // timers[(g + index) % 4] + res.data[(g + index) % 4];
          timers[(g + index) % 4] + res.data.signal_time[(g + index) % 4];
      }
    }
    return timers;
  };

  const getTimers = (i) => {
    // return new Promise((res, rej)=>{
    //   res({
    //     data : dummyData[i+1]
    //   })
    // });
    return api.get("/get-timer", {
      params: {
        _id: state._id,
        index: i,
      },
    });
  }
  if (loading)
    return (
      <div>
        {" "}
        <Loader
          active
          inline="centered"
          style={{
            marginTop: "50vh",
          }}
        />
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5vh",
        // marginLeft: "-35vw",
      }}
    >
      {new Array(4).fill("").map((_, index) => (
        <div style={{ marginLeft: "20px" }}>
          <Statistic
            style={{
              // marginLeft: "45vw",
              position: "relative",
              top: "15px",
            }}
            color="grey"
          >
            <Statistic.Value>{String.fromCharCode(index + 65)}</Statistic.Value>
          </Statistic>
          <div
            key={index}
            style={{
              display: "inline",
            }}
          >
            <input
              type="radio"
              name="traffic-light-color"
              className={index === green ? "color3" : "color1"}
              value={index === green ? "color3" : "color1"}
              style={{
                margin: "4vh 0vw",
              }}
            />
            <Statistic
              style={{
                position: "relative",
                top: "15px",
              }}
              color={index === green ? "green" : "red"}
            >
              <Statistic.Value>{timer[index]}</Statistic.Value>
            </Statistic>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrafficLight;
