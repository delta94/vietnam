import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { baseAPI } from '../configs';
import { helper } from '../services';

interface IAPIProps {
  method: string;
  url: string;
  path: string;
  themeTextColor: string;
}

class API extends Component<IAPIProps> {
  render() {
    const { method = '', url = '', path = '', themeTextColor = '' } = this.props;

    const api = url ? url : `${baseAPI}/${path}`;
    return (
      <div id="API">
        <h3 className="d-inline m-0 text-success text-uppercase mr-3">{method}</h3>
        <h5 className={`${themeTextColor} d-inline m-0 cursor-pointer`}>
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
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  return { themeTextColor };
};

export default connect(mapStateToProps)(API);
