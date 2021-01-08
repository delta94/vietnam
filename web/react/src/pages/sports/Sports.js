import React, { Component } from 'react';

import { Doc } from '../../components';

export default class Sports extends Component {
  render() {
    return (
      <div id="Sports" className="container">
        <Doc group={'sports'} header={'Sports'}></Doc>
      </div>
    );
  }
}
