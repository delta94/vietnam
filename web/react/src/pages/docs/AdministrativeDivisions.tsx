import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class Maps extends Component {
  render() {
    return (
      <div id="AdministrativeDivisions" className="container">
        <SmallDoc group={'administrativeDivisions'} header={'Administrative Divisions'}></SmallDoc>
      </div>
    );
  }
}
