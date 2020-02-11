import React from 'react';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App-container'>
        <ul className='App-ul'>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
        </ul>
        <ul>
          <NavLink to='/weather'>
            <li>Get Weather</li>
          </NavLink>
        </ul>
      </div>

      <Switch>
        <Route path='/' exact component={null} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
