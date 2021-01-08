import React, { Component } from 'react';

import { baseAPI } from '../configs';
import { copyToClipboard } from '../helper';

export default class Code extends Component {
  render() {
    const { method, url = '', path = '' } = this.props;
    const api = url ? url : `${baseAPI}/${path}`;
    return (
      <div id="Code" className="bg-dark text-white p-3 rounded">
        <span className="text-uppercase mr-3">{method}</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            copyToClipboard(api);
          }}>
          {api}
        </span>
      </div>
    );
  }
}
