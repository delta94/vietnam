import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class YouTube extends Component {
  render() {
    return (
      <div id="YouTube" className="container-fluid">
        <SmallDoc group={'youtube'} header={'YouTube'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(YouTube);
