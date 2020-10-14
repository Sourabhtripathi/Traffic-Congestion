import React from 'react';
const Home = (props) => {
    const onClick = () => {
        props.history.push({pathname: '/lights', state: {message: "hello, im a passed message!"}});
    }
    return (
        <button onClick={onClick}>Show Result</button>
    );
}

export default Home;
