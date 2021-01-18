import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Calendar extends Component {
  render() {
    return (
      <div id="Calendar" className="container-fluid">
        <SmallDoc group={'calendar'} header={'Calendar'}></SmallDoc>
      </div>
    );
  }
}
