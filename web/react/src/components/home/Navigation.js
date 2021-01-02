import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import routes from '../../routers';

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
                  const { path, text } = route;
                  if (!text) return '';
                  return (
                    <NavDropdown.Item
                      key={index}
                      href={`https://hieudoanm.github.io/vietnam/#/${path}`}>
                      {text}
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
