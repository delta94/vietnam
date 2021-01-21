import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class Phones extends Component {
  render() {
    return (
      <div id="Phones" className="container-fluid">
        <SmallDoc group={'phones'} header={'Phones'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Phones);
