import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class History extends Component {
  render() {
    return (
      <div id="History" className="container-fluid">
        <SmallDoc group={'history'} header={'History'}></SmallDoc>
      </div>
    );
  }
}
