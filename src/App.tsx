import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC<{}>  = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' component={HomePage}></Route>
        <Route path='/about-us' component={AboutPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
