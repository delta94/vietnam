import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Calendar extends Component {
  render() {
    return (
      <div id="Calendar" className="container-fluid">
        <SmallDoc group={'calendar'} header={'Calendar'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Calendar);
