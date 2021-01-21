import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class OpenAPIs extends Component {
  render() {
    return (
      <div id="OpenAPIs" className="container-fluid">
        <SmallDoc group={'openAPIs'} header={'OpenAPIs'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(OpenAPIs);
