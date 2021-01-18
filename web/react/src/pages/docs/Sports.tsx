import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Sports extends Component {
  render() {
    return (
      <div id="Sports" className="container-fluid">
        <SmallDoc group={'sports'} header={'Sports'}></SmallDoc>
      </div>
    );
  }
}
