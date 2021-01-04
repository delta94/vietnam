import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { List, GiaoHangNhanh, Vietcetera } from '../components';

class Technologies extends Component {
  render() {
    return (
      <div id="Technologies">
        <main className="container mt-3">
          <Tabs defaultActiveKey="list" className="nav-justified">
            <Tab eventKey="list" title="List">
              <List></List>
            </Tab>
            <Tab eventKey="giaoHangNhanh" title="Giao Hang Nhanh">
              <GiaoHangNhanh></GiaoHangNhanh>
            </Tab>
            <Tab eventKey="vietcetera" title="Vietcetera">
              <Vietcetera></Vietcetera>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Technologies;
