import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-default fixed-top">
        <div className="container-fluid">
        <div className="navbar-header">
        <button className="navbar-toggle navbar-toggle-right collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">
        <i className="fa fa-bold"></i>
        </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;

