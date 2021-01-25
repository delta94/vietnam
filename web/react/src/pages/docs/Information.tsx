import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Information extends Component {
  render() {
    return (
      <div id="Information" className="container-fluid">
        <SmallDoc group={'information'} header={'Information'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Information);
