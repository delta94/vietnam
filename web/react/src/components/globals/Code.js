import React, { Component } from 'react';

import { baseAPI } from '../../configs';
import { copyToClipboard } from '../../helper';

class Code extends Component {
  render() {
    const { method, url } = this.props;
    const api = `${baseAPI}/${url}`;
    return (
      <div id="Code" className="bg-dark text-white p-3 rounded mb-3">
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

export default Code;
