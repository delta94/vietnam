import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Finance extends Component {
  render() {
    return (
      <div id="Finance" className="container">
        <SmallDoc group={'finance'} header={'Finance'}></SmallDoc>
      </div>
    );
  }
}
