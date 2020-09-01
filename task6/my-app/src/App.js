import React from 'react';
import Header from "./components/header/header";
import Main from "./components/main/main"
import Users from "./components/users/Users"

import './App.css';
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Route exact path="/" render={Main}/>
        <Route exact path="/employees" >
            <Users/>
        </Route>
    </div>
  );
}

export default App;
