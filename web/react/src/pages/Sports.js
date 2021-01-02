import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { SportsClubs } from '../components';

class Sports extends Component {
  render() {
    return (
      <div id="Sports">
        <main className="container mt-3">
          <Tabs defaultActiveKey="clubs" className="nav-justified">
            <Tab eventKey="clubs" title="Clubs">
              <SportsClubs></SportsClubs>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Sports;
