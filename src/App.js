import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import NewsState from './context/newsAPI/NewsState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <NewsState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title="Drew's News" icon='fas fa-broadcast-tower' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </NewsState>
  );
};

export default App;
