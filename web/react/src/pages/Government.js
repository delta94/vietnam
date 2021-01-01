import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { GovernmentMinistries } from '../components';

class Government extends Component {
  render() {
    return (
      <div id="Government">
        <main className="container mt-3">
          <Tabs defaultActiveKey="ministries" className="nav-justified">
            <Tab eventKey="ministries" title="Ministries">
              <GovernmentMinistries></GovernmentMinistries>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Government;
