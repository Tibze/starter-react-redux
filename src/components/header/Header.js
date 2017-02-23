import React from 'react';
import {Link} from 'react-router';

import styles from './styles.scss';

import logo from '../../../static/assets/images/react-logo.png';
// import {connect} from 'react-redux';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="container nav">
          <div className="nav-left">
              <h1 className='title nav-title'>React / Redux</h1>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <Link className='nav-item' to='/'>Home</Link>
            <Link className='nav-item' to='/about'>About</Link>
            <Link className='nav-item' to='/contact'>Contact</Link>
            <Link className='nav-item' to='/settings'>Settings</Link>
          </div>
        </nav>
    </div>
    );
  }
}
