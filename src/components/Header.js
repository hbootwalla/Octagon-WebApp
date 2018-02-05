import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-expand-lg fixed-top">
            
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
            <img className="d-inline-block align-top" width="150" height="50" src={require("../assets/images/brand.png")} alt="" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

