import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class LicensePlates extends Component {
  render() {
    return (
      <div id="LicensePlates" className="container">
        <SmallDoc group={'licensePlates'} header={'License Plates'}></SmallDoc>
      </div>
    );
  }
}
