import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

import routes from '../routers';

interface INavPillsProps {
  group: string;
  themeLink: string;
}

interface INavPillsState {}

class NavPills extends Component<INavPillsProps, INavPillsState> {
  render() {
    const { group = [], themeLink = '' } = this.props;
    const items = routes.filter((route: any) => route.demo && route.group === group);
    const total: number = items.length;
    return (
      <Nav className="justify-content-center">
        {items.map((item: any, index: number) => {
          const { path: pathname = '', text = '' } = item;
          const marginRight: string = index + 1 === total ? '' : 'mr-3';
          return (
            <Nav.Item className={`${marginRight} mb-3`} key={index}>
              <Nav.Link className={`${themeLink} border rounded`} as={Link} to={{ pathname }}>
                {text}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeLink = _.get(state, 'theme.link', '');
  return { themeLink };
};

export default connect(mapStateToProps)(NavPills);
