import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Sports extends Component {
  render() {
    return (
      <div id="Sports" className="container-fluid">
        <SmallDoc group={'sports'} header={'Sports'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Sports);
