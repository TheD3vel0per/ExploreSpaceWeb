import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GamePage  from './pages/GamePage';
import AsteroidPage from './pages/AsteroidPage';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './App.css';

const App: React.FC<{}>  = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/about-us' component={AboutPage}></Route>
        <Route path='/game' component={GamePage}></Route>
        <Route path='/asteroids' component={AsteroidPage}></Route>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
