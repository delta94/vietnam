import React, { Component } from 'react';

import { Doc } from '../../components';

export default class Phones extends Component {
  render() {
    return (
      <div id="Phones" className="container">
        <Doc group={'phones'} header={'Phones'}></Doc>
      </div>
    );
  }
}
