import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Banks extends Component {
  render() {
    return (
      <div id="Banks" className="container-fluid">
        <SmallDoc group={'banks'} header={'Banks'}></SmallDoc>
      </div>
    );
  }
}
