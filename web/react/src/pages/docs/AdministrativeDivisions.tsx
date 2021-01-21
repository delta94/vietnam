import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class AdministrativeDivisions extends Component {
  render() {
    return (
      <div id="AdministrativeDivisions" className="container-fluid">
        <SmallDoc group={'administrativeDivisions'} header={'Administrative Divisions'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(AdministrativeDivisions);
