import React from 'react';
import {connect} from 'react-redux';

import reactImg from '../../../static/assets/images/reactNe.png';

import styles from './styles.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log('Home::componentWillMount');

    this.state = {
      'defaultMessage':'React / Redux Starter'
    }

    //if (!this.props.reactList) this.props.fetchPosts('reactjs');

  }

  componentDidMount() {
    console.log('Home::componentDidMount');
  }

  componentWillUnmount() {
    console.log('Home::componentWillUnmount');
  }

  render() {

    const state = this.state;

    return (
    	<div className='container view'>
        <h2 className='title has-text-centered'>{state.defaultMessage}</h2>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


Home.propTypes = {

};

Home.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
