import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Government extends Component {
  render() {
    return (
      <div id="Government" className="container">
        <SmallDoc group={'government'} header={'Government'}></SmallDoc>
      </div>
    );
  }
}
