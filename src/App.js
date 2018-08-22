import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

// Components
import NavBottom from './components/NavBottom';
import NavTop from './components/NavTop';

// Pages
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavTop />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
          <NavBottom />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
