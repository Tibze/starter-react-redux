import React from 'react';
import {connect} from 'react-redux';

import styles from './styles.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                {this.props.settings.footerTitle}
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};


Footer.propTypes = {

};

Footer.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
