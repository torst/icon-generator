import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import html2canvas from '../../../lib/html2canvas';
import { showPopupDownload } from '../../../src/redux/actions';

class Footer extends Component {
  static defaultProps = {
    showPopupDownload: () => undefined,
  }

  static propTypes = {
    showPopupDownload: PropTypes.func,
  }

  openPopUp = (event) => {
    event.preventDefault();

    this.props.showPopupDownload(true);

    html2canvas(this.props);
  };

  render() {
    return (
      <footer>
        <p>
          When you done, you can download your icon by clicking on the download
          buttons bellow
        </p>
        <a href="" className="btn-green" onClick={this.openPopUp}>
          Download icon
        </a>
      </footer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showPopupDownload: bindActionCreators(showPopupDownload, dispatch),
});

export default connect(null, mapDispatchToProps)(Footer);
