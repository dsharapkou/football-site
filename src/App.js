import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/elements/Header';
import About from './components/elements/About';
import Error from './components/elements/Error';
import History from './components/elements/History';
import GloryHall from './components/elements/GloryHall';
import Navbar from './components/elements/Navbar';
import Contacts from './components/elements/Contacts';
import Leadership from './components/elements/Leadership';
import Players from './components/elements/Players';
import Stadium from './components/elements/Stadium';
import Timetable from './components/elements/Timetable';
import SchoolInfo from './components/elements/SchoolInfo';
import FAQ from './components/elements/FAQ';
import './App.scss';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Header} exact />
                <Route path="/team/about" component={About} />
                <Route path="/team/leadership" component={Leadership} />
                <Route path="/team/contacts" component={Contacts} />
                <Route path="/team/stadium" component={Stadium} />
                <Route path="/club/history" component={History} />
                <Route path="/club/gloryhall" component={GloryHall} />
                <Route path="/club/players" component={Players} />
                <Route path="/school/about" component={SchoolInfo} />

                <Route path="/school/timetable" component={Timetable} />
                <Route path="/school/FAQ" component={FAQ} />

                <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
