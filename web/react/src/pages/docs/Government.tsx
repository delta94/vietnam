import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Government extends Component {
  render() {
    return (
      <div id="Government" className="container-fluid">
        <SmallDoc group={'government'} header={'Government'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Government);
