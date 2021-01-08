import React, { Component } from 'react';

import { Doc } from '../../components';

export default class Calendar extends Component {
  render() {
    return (
      <div id="Calendar" className="container">
        <Doc group={'calendar'} header={'Calendar'}></Doc>
      </div>
    );
  }
}
