import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Visas extends Component {
  render() {
    return (
      <div id="Visas" className="container-fluid">
        <SmallDoc group={'visas'} header={'Visas'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Visas);
