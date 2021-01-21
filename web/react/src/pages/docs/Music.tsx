import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Music extends Component {
  render() {
    return (
      <div id="Music" className="container-fluid">
        <SmallDoc group={'music'} header={'Music'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Music);
