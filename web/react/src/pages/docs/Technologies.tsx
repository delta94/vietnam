import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Technologies extends Component {
  render() {
    return (
      <div id="Technologies" className="container">
        <SmallDoc group={'technologies'} header={'Technologies'}></SmallDoc>
      </div>
    );
  }
}
