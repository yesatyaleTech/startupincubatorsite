import React from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Footer from '../components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mentorship from './Mentorship/Mentorship';
import Home from './Home/Home';
import Fundraising from './Fundraising/Fundraising';
import Startups from './Startups/Startups';
import Header from '../components/Header/Header';
import VentureCapital from './VentureCapital/VentureCapital';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="page-body">
        <Router>
          <Switch>
            <Route path='/fundraising'>
              <Fundraising />
            </Route>
            <Route path='/mentorship'>
              <Mentorship />
            </Route>
            <Route path="/startups">
              <Startups />
            </Route>
            <Route path="/venture-capital">
              <VentureCapital />
            </Route>
            <Route path='/'>
              <Startups />
            </Route>
          </Switch>
        </Router>
      </section>
      <Footer />
    </div>
  );
}

export default App;
