import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Music extends Component {
  render() {
    return (
      <div id="Music" className="container">
        <SmallDoc group={'music'} header={'Music'}></SmallDoc>
      </div>
    );
  }
}
