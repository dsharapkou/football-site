import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/elements/Header';
import Body from './components/elements/Body';
import './App.scss';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
          <Header />

      </div>
    );
  }
}

export default App;
