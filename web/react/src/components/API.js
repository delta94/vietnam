import React, { Component } from 'react';

import { baseAPI } from '../configs';
import { copyToClipboard } from '../helper';

export default class API extends Component {
  render() {
    const { method, url = '', path = '' } = this.props;
    const api = url ? url : `${baseAPI}/${path}`;
    return (
      <div id="API">
        <h3 className="d-inline m-0 text-success text-uppercase mr-3">{method}</h3>
        <h5 className="d-inline m-0 text-secondary cursor-pointer">
          <span
            onClick={() => {
              copyToClipboard(api);
            }}>
            {path}
          </span>
        </h5>
      </div>
    );
  }
}
