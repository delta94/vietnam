import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class YouTube extends Component {
  render() {
    return (
      <div id="YouTube" className="container-fluid">
        <SmallDoc group={'youtube'} header={'YouTube'}></SmallDoc>
      </div>
    );
  }
}
