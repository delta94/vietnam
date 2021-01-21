import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Finance extends Component {
  render() {
    return (
      <div id="Finance" className="container-fluid">
        <SmallDoc group={'finance'} header={'Finance'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Finance);
