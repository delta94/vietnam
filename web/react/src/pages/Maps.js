import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { MapsDistricts, MapsProvinces, MapsWards } from '../components';

class Maps extends Component {
  render() {
    return (
      <div id="Maps">
        <main className="container mt-3">
          <Tabs defaultActiveKey="provinces" className="nav-justified">
            <Tab eventKey="provinces" title="Provinces">
              <MapsProvinces></MapsProvinces>
            </Tab>
            <Tab eventKey="districts" title="Districts">
              <MapsDistricts></MapsDistricts>
            </Tab>
            <Tab eventKey="wards" title="Wards">
              <MapsWards></MapsWards>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Maps;
