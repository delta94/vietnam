import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class LicensePlates extends Component {
  render() {
    return (
      <div id="LicensePlates" className="container-fluid">
        <SmallDoc group={'licensePlates'} header={'License Plates'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(LicensePlates);
