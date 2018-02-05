import React, { Component } from 'react';
import HeroComponent from './HeroComponent.js';
import TextComponent from './TextComponent.js';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
    
        <div className="homePage">
        <HeroComponent />
        <TextComponent />
        </div>      
      
    );
  }
}

export default HomePage;

