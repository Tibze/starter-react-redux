import React, { Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {setFooterTitle} from '../../actions/SettingsActions';

class Settings extends Component {

  handleChange(event) {
    this.props.setFooterTitle({footerTitle: event.target.value});
  }

  render() {
    return (
    	<div className="container view settings">
        <form>
          <div className="form-group">
            <label className='label'>Custom Footer Title</label>
            <input type="text" className="input" value={this.props.settings.footerTitle} onChange={this.handleChange.bind(this)} />
          </div>
        </form>
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings:state.settings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setConnected: () => {
    //   dispatch(setConnected());
    // },
    // disconnect: () => {
    //   dispatch(disconnect());
    // },
    setFooterTitle: (data) => {
      dispatch(setFooterTitle(data));
    }
  };
};


Settings.propTypes = {
  settings: PropTypes.object.isRequired
};

Settings.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
