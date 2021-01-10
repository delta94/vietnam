import React, { Component } from 'react';

import { SmallDoc } from '../../components';

export default class News extends Component {
  render() {
    return (
      <div id="News" className="container">
        <SmallDoc group={'news'} header={'News'}></SmallDoc>
      </div>
    );
  }
}
