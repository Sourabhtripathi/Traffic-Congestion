import React from 'react';
const Home = ({history, junctions}) => {
    const onClick = () => {
        history.push({pathname: '/lights', state: {message: "hello, im a passed message!"}});
    }
    return (
        <div>
            <button onClick={onClick}>Show Result</button>
            {junctions.map((jun, index)=>{
                console.log(jun);
                return (
                    <div key={index}>{jun.name}</div>
                )
            })}
        </div>
    );
}

export default Home;
