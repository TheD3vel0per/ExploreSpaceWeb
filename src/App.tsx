import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import IssPage from './pages/IssPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GamePage  from './pages/GamePage';
import AsteroidPage from './pages/AsteroidPage';
import ThreeBodyProblemPage from './pages/ThreeBodyProblemPage';
import MarsImagePage from './pages/MarsImagePage'
import RoadsterPage from './pages/RoadsterPage';


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import './App.css';

const App: React.FC<{}>  = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/about-us' component={AboutPage}></Route>
        <Route path='/roadster' component={RoadsterPage}></Route>
        <Route path='/3bp' component={ThreeBodyProblemPage}></Route>
        <Route path='/game' component={GamePage}></Route>
        <Route path='/asteroids' component={AsteroidPage}></Route>
        <Route path='/mars' component={MarsImagePage}></Route> 
        <Route path='/iss' component={IssPage}></Route>
        <Route path='/' component={HomePage}></Route>

      </Switch>
    </BrowserRouter>
  );
};


export default App;
