import React from 'react';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Search } from '../';

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
      </div>

      <Switch>
        <Route path='/weather' exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
