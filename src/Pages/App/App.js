import React from 'react';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Search, Details } from '../';

function App() {
  return (
    <BrowserRouter>
      <div className='App-container'>
        <header className='App-header'>
          <ul className='App-ul'>
            <NavLink className='App-navlink' to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink className='App-navlink' to='/weather'>
              <li>Get Weather</li>
            </NavLink>
          </ul>
        </header>
        <Switch>
          <Route path='/weather' exact component={Search} />
          <Route path='/weather/details/:location' exact component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
