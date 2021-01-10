import React, { Component } from 'react';

import { Doc } from '../../components';

export default class Finance extends Component {
  render() {
    return (
      <div id="Finance" className="container">
        <Doc group={'finance'} header={'Finance'}></Doc>
      </div>
    );
  }
}
