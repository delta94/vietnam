import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, ListGroup } from 'react-bootstrap';

interface IHomeProps {
  themeInput: string;
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
      { name: 'administrative-divisions', docs: '/administrative-divisions' },
      { name: 'banks', docs: '/banks' },
      { name: 'calendar', docs: '/calendar' },
      { name: 'ethnic-minorities', docs: '/ethnic-minorities' },
      { name: 'finance', docs: '/finance' },
      { name: 'government', docs: '/government' },
      { name: 'license-plates', docs: '/license-plates' },
      { name: 'music', docs: '/music' },
      { name: 'news', docs: '/news' },
      { name: 'open-apis', docs: '/open-apis' },
      { name: 'phones', docs: '/phones' },
      { name: 'sports', docs: '/sports' },
      { name: 'vnltk', docs: '/vnltk' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));

    this.state = {
      query: '',
      apis,
      filterAPIs: apis
    };

    this.filter = this.filter.bind(this);
    this.renderList = this.renderList.bind(this);
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

  renderList() {
    const { filterAPIs = [] } = this.state;
    const {
      themeTextColor = '',
      themeBorder = '',
      themeListItemBorderBottom = '',
      themeSecondaryBackgroundColor = ''
    } = this.props;

    return (
      <ListGroup className={`${themeBorder} list-group-flush rounded-lg`}>
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
    const { query } = this.state;
    const { themeTextColor, themeInput } = this.props;
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
            className={`${themeInput}`}
            value={query}
            onChange={this.updateQuery}></Form.Control>
        </Form>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeListItemBorderBottom: string = _.get(state, 'theme.listItemBorderBottom', '');
  const themeSecondaryBackgroundColor: string = _.get(state, 'theme.secondaryBackgroundColor', '');
  const themeInput: string = _.get(state, 'theme.input', '');
  return {
    themeTextColor,
    themeBorder,
    themeListItemBorderBottom,
    themeSecondaryBackgroundColor,
    themeInput
  };
};

export default connect(mapStateToProps)(Home);
