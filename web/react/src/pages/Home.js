import React, { Component } from 'react';

import { HomePackages } from '../components';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <main className="container mt-3">
          <HomePackages></HomePackages>
        </main>
      </div>
    );
  }
}

export default Home;
