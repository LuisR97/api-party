import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </header>

        <ul className = "navLinks">
          <li>
            <NavLink to = "/github">GitHub API</NavLink>
          </li>
        </ul>
        
        <Switch>
        <Router path = "/github" render = {() => <h1>GitHub!</h1>}/>
        </Switch>

      </div>
    );
  }
}

export default App;
