import React, { Component } from 'react';
import { connect } from 'react-redux';

import { baseAPI } from '../configs';
import { helper } from '../services';

interface IAPIProps {
  method: string;
  url: string;
  path: string;
  theme: string;
}

class API extends Component<IAPIProps> {
  render() {
    const { method = '', url = '', path = '', theme = 'light' } = this.props;
    const textColor: string = theme === 'light' ? 'text-secondary' : 'text-white';
    const api = url ? url : `${baseAPI}/${path}`;
    return (
      <div id="API">
        <h3 className="d-inline m-0 text-success text-uppercase mr-3">{method}</h3>
        <h5 className={`${textColor} d-inline m-0 cursor-pointer`}>
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

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

export default connect(mapStateToProps)(API);
