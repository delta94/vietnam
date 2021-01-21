import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class History extends Component {
  render() {
    return (
      <div id="History" className="container-fluid">
        <SmallDoc group={'history'} header={'History'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(History);
