import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { GovernmentMinisters, GovernmentMinistries } from '../components';

class Government extends Component {
  render() {
    return (
      <div id="Government">
        <main className="container mt-3">
          <Tabs defaultActiveKey="ministries" className="nav-justified">
            <Tab eventKey="ministries" title="Ministries">
              <GovernmentMinistries></GovernmentMinistries>
            </Tab>
            <Tab eventKey="ministers" title="Ministers">
              <GovernmentMinisters></GovernmentMinisters>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Government;
