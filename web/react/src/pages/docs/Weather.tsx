import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Weather extends Component {
  render() {
    return (
      <div id="Weather" className="container-fluid">
        <SmallDoc group={'weather'} header={'Weather'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Weather);
