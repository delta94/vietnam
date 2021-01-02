import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import routes from '../../routers';
import { capitalize } from '../../helper';

class HomeNavigation extends Component {
  render() {
    return (
      <div id="HomeNavigation">
        <Navbar bg="danger" expand="sm" variant="dark">
          <div className="container">
            <Navbar.Brand href="#" className="text-white">
              VNPM
            </Navbar.Brand>
            <Nav className="ml-auto">
              <NavDropdown title="APIs" className="text-white" id="apis-nav-dropdown">
                {routes.map((route, index) => {
                  let { path } = route;
                  path = path.replace('/', '');
                  if (!path) return '';
                  return (
                    <NavDropdown.Item
                      key={index}
                      href={`https://hieudoanm.github.io/vietnam/#/${path}`}>
                      {capitalize(path)}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HomeNavigation;
