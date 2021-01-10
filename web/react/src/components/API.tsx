import React, { Component } from 'react';

import { baseAPI } from '../configs';
import { helper } from '../services';

interface IAPIProps {
  method: string;
  url: string;
  path: string;
}

export default class API extends Component<IAPIProps> {
  render() {
    const { method = '', url = '', path = '' } = this.props;
    const api = url ? url : `${baseAPI}/${path}`;
    return (
      <div id="API">
        <h3 className="d-inline m-0 text-success text-uppercase mr-3">{method}</h3>
        <h5 className="d-inline m-0 text-secondary cursor-pointer">
          <span
            onClick={() => {
              helper.copyToClipboard(api);
            }}>
            {path}
          </span>
        </h5>
      </div>
    );
  }
}
