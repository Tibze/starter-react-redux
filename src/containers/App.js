import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { paths } from '../routes/Routes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import styles from './styles.scss'


export class App extends Component {

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>
        <Header />
		{this.props.children}
		<Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
