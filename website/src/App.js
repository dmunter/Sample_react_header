import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Practice from './components/Practice';

function App() {


  return (
    <>
      <Router>
      <Navbar />
        <Switch >
        <Route path= '/' exact/>
      </Switch>
      <Practice obj = "23" />
      </Router >
    </>
    

  );
}

export default App;
