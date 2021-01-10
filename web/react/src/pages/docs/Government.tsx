import React, { Component } from 'react';

import { Doc } from '../../components';

export default class Government extends Component {
  render() {
    return (
      <div id="Government" className="container">
        <Doc group={'government'} header={'Government'}></Doc>
      </div>
    );
  }
}
