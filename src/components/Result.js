import React, {useState, useEffect} from 'react';
const Result = (props) => {
  useEffect(()=>{
    if(!props.location.state){
      props.history.push("/");
    }
  },[])

  return (
    <div>Result</div>
  );
}

export default Result;
