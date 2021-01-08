import React, { Component } from 'react';

import { capitalize } from '../../helper';
import { endpoints } from '../../configs';
import { Doc } from '../../components';

export default class Docs extends Component {
  constructor() {
    super();

    this.state = { endpoints };
  }

  render() {
    const { endpoints = {} } = this.state;
    const groups = Object.keys(endpoints);

    return (
      <div id="Docs" className="container">
        {groups.length > 0 &&
          groups.map((group, index) => {
            return <Doc key={index} group={group} header={capitalize(group)}></Doc>;
          })}
      </div>
    );
  }
}
