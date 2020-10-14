import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import Result from './Result';
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/lights" component={Result}/>
    </BrowserRouter>
  );
}

export default App;
