import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Banks extends Component {
  render() {
    return (
      <div id="Banks" className="container-fluid">
        <SmallDoc group={'banks'} header={'Banks'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Banks);
