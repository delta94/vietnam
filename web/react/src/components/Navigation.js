import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import routes from '../routers';

export default class Navigation extends Component {
  constructor() {
    super();

    this.state = { routes };
  }
  render() {
    const { routes = [] } = this.state;

    return (
      <div id="Navigation">
        <Navbar bg="danger" expand="sm" className="shadow fixed-top" variant="dark">
          <div className="container">
            <Navbar.Brand href="#" className="text-white">
              VNPM
            </Navbar.Brand>
            <Nav className="ml-auto">
              <NavDropdown title="APIs" className="text-white" id="apis-nav-dropdown">
                {routes
                  .filter(route => route.navigation)
                  .map((route, index) => {
                    const { path, text } = route;
                    return (
                      <NavDropdown.Item key={index}>
                        <Link to={{ pathname: path }}>{text}</Link>
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
