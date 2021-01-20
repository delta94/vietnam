import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, Dropdown, DropdownButton, Form } from 'react-bootstrap';

import routes from '../routers';
import * as themeActions from '../redux/actions/theme';

interface INavigationProps {
  theme: string;
  updateTheme: (theme: string) => {};
}

interface INavigationState {
  routes: Array<any>;
}

class Navigation extends Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps) {
    super(props);

    this.state = { routes };

    this.updateTheme = this.updateTheme.bind(this);
  }

  async updateTheme() {
    let { theme = 'light' } = this.props;
    theme = theme === 'light' ? 'dark' : 'light';
    this.props.updateTheme(theme);
  }

  render() {
    const { routes = [] } = this.state;
    const { theme = '' } = this.props;

    const bgColor: string = theme === 'light' ? 'bg-danger' : 'bg-black';
    const border: string =
      theme === 'light' ? 'border-bottom border-danger' : 'border-bottom border-white';

    return (
      <Navbar className={`${bgColor} ${border}`} expand="sm" variant="dark">
        <div className="container-fluid p-0">
          <Navbar.Brand href="#" className="text-white">
            VIETNAM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-navs"></Navbar.Toggle>
          <Navbar.Collapse id="navbar-navs">
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
              <Form inline>
                <Dropdown className="mr-3">
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
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  className="text-white cursor-pointer"
                  checked={theme !== 'light'}
                  onChange={() => this.updateTheme()}
                  label={theme.toUpperCase()}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { theme = '' } = state;
  return { theme };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateTheme: (theme: string) => dispatch(themeActions.updateTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
