import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, ListGroup } from 'react-bootstrap';

interface IHomeProps {
  themeBorder: string;
  themeTextColor: string;
  themeListItemBorderBottom: string;
  themeSecondaryBackgroundColor: string;
}

interface IHomeState {
  query: string;
  apis: Array<any>;
  filterAPIs: Array<any>;
}

interface IAPI {
  name: string;
  docs: string;
}

class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    const apis: Array<IAPI> = [
      {
        name: 'administrative-divisions',
        docs: '/administrative-divisions'
      },
      {
        name: 'banks',
        docs: '/banks'
      },
      {
        name: 'calendar',
        docs: '/calendar'
      },
      {
        name: 'ethnic-minorities',
        docs: '/ethnic-minorities'
      },
      {
        name: 'finance',
        docs: '/finance'
      },
      {
        name: 'government',
        docs: '/government'
      },
      {
        name: 'license-plates',
        docs: '/license-plates'
      },
      {
        name: 'music',
        docs: '/music'
      },
      {
        name: 'news',
        docs: '/news'
      },
      {
        name: 'open-apis',
        docs: '/open-apis'
      },
      {
        name: 'phones',
        docs: '/phones'
      },
      {
        name: 'sports',
        docs: '/sports'
      },
      { name: 'vnltk', docs: '/vnltk' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));

    this.state = {
      query: '',
      apis,
      filterAPIs: apis
    };

    this.filter = this.filter.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  async updateQuery(event: any) {
    const { value = '' } = event.target;
    await this.setState({ query: value });
    const { query = '', apis = [] } = this.state;
    const filterAPIs = this.filter(apis, query);

    await this.setState({ filterAPIs });
  }

  filter(packages: Array<any> = [], query: string = '') {
    return packages.filter(_package => {
      const { name = '' } = _package;
      return query ? name.toLowerCase().includes(query.toLowerCase()) : true;
    });
  }

  renderTable() {
    const { filterAPIs = [] } = this.state;
    const {
      themeTextColor = '',
      themeBorder = '',
      themeListItemBorderBottom = '',
      themeSecondaryBackgroundColor = ''
    } = this.props;

    return (
      <ListGroup className={`${themeBorder} list-group-flush h-65vh overflow-auto rounded-lg`}>
        {filterAPIs.length !== 0 &&
          filterAPIs.map((_package, index) => {
            const { name = '', docs = '' } = _package;
            return (
              <ListGroup.Item
                key={index}
                className={`${themeSecondaryBackgroundColor} ${themeTextColor} ${themeListItemBorderBottom} d-flex justify-content-between align-items-center`}>
                {name}
                <span>
                  {docs && (
                    <Link className={`${themeTextColor} ml-1`} to={docs}>
                      <u>Docs</u>
                    </Link>
                  )}
                </span>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    );
  }

  render() {
    const { themeTextColor } = this.props;
    return (
      <div id="Home" className="container-fluid">
        <Form className="mb-3">
          <Form.Label className={`${themeTextColor}`} htmlFor="query">
            Query
          </Form.Label>
          <Form.Control
            id="query"
            type="text"
            placeholder="Query"
            value={this.state.query}
            onChange={this.updateQuery}></Form.Control>
        </Form>
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeBorder = _.get(state, 'theme.border', '');
  const themeTextColor = _.get(state, 'theme.textColor', '');
  const themeListItemBorderBottom = _.get(state, 'theme.listItemBorderBottom', '');
  const themeSecondaryBackgroundColor = _.get(state, 'theme.secondaryBackgroundColor', '');
  return { themeTextColor, themeBorder, themeListItemBorderBottom, themeSecondaryBackgroundColor };
};

export default connect(mapStateToProps)(Home);
