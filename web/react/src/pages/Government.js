import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import {
  GovernmentGeneralSecretaries,
  GovernmentMinisters,
  GovernmentMinistries,
  GovernmentNationalAssemblyChairs,
  GovernmentPresidents,
  GovernmentPrimeMinisters
} from '../components';

class Government extends Component {
  render() {
    return (
      <div id="Government">
        <main className="container mt-3">
          <Tabs defaultActiveKey="generalSecretaries" className="nav-justified">
            <Tab eventKey="generalSecretaries" title="General Secretaries">
              <GovernmentGeneralSecretaries></GovernmentGeneralSecretaries>
            </Tab>
            <Tab eventKey="presidents" title="Presidents">
              <GovernmentPresidents></GovernmentPresidents>
            </Tab>
            <Tab eventKey="primeMinisters" title="Prime Ministers">
              <GovernmentPrimeMinisters></GovernmentPrimeMinisters>
            </Tab>
            <Tab eventKey="nationalAssemblyChairs" title="National Assembly Chairs">
              <GovernmentNationalAssemblyChairs></GovernmentNationalAssemblyChairs>
            </Tab>
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
