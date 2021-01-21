import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class EthnicMinorities extends Component {
  render() {
    return (
      <div id="EthnicMinorities" className="container-fluid">
        <SmallDoc group={'ethnicMinorities'} header={'Ethnic Minorities'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(EthnicMinorities);
