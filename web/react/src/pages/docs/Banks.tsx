import React, { Component } from 'react';

import { Doc } from '../../components';

export default class Banks extends Component {
  render() {
    return (
      <div id="Banks" className="container">
        <Doc group={'banks'} header={'Banks'}></Doc>
      </div>
    );
  }
}
