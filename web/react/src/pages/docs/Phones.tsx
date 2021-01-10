import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Phones extends Component {
  render() {
    return (
      <div id="Phones" className="container">
        <SmallDoc group={'phones'} header={'Phones'}></SmallDoc>
      </div>
    );
  }
}
