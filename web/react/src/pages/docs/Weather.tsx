import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Weather extends Component {
  render() {
    return (
      <div id="Weather" className="container-fluid">
        <SmallDoc group={'weather'} header={'Weather'}></SmallDoc>
      </div>
    );
  }
}
