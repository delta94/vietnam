import React, { Component } from 'react';

import { Doc } from '../../components';

export default class News extends Component {
  render() {
    return (
      <div id="News" className="container">
        <Doc group={'news'} header={'News'}></Doc>
      </div>
    );
  }
}
