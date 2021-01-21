import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SmallDoc } from '../../components';

class News extends Component {
  render() {
    return (
      <div id="News" className="container-fluid">
        <SmallDoc group={'news'} header={'News'}></SmallDoc>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(News);
