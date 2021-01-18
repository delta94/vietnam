import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';

import routes from '../routers';

interface INavigationProps {}

interface INavigationState {
  routes: Array<any>;
}

export default class Navigation extends Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props);

    this.state = { routes };
  }

  render() {
    const { routes = [] } = this.state;

    return (
      <Navbar bg="danger" expand="sm" variant="dark">
        <div className="container-fluid p-0">
          <Navbar.Brand href="#" className="text-white">
            VIETNAM
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item className="mr-3">
              <Link className="text-white" to={{ pathname: 'docs' }}>
                DOCS
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                href="https://www.npmjs.com/package/vnapis"
                className="text-white text-uppercase"
                rel="noreferrer"
                target="_blank">
                npm
              </a>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto">
            <Dropdown>
              <DropdownButton variant="light" menuAlign="right" title="APIs">
                {routes
                  .filter(route => route.navigation)
                  .map((route, index) => {
                    const { path: pathname, text } = route;
                    return (
                      <Dropdown.Item key={index} as={Link} to={{ pathname }}>
                        {text}
                      </Dropdown.Item>
                    );
                  })}
              </DropdownButton>
            </Dropdown>
          </Nav>
        </div>
      </Navbar>
    );
  }
}