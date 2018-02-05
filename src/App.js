import React, { Component } from 'react';
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import ContactForm from './components/ContactForm.js';
import Footer from './components/Footer.js';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <div className = "paddingTop">
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/contact' component={ContactForm}/>
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
