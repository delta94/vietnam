import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';

class HomePackages extends Component {
  constructor() {
    super();
    const apis = [
      {
        name: 'banks',
        npm: 'vietnambanks',
        docs: '/banks'
      },
      {
        name: 'calendar',
        npm: '',
        docs: '/calendar'
      },
      {
        name: 'ethnic-minorities',
        npm: '',
        docs: '/ethnic-minorities'
      },
      {
        name: 'finance',
        npm: '',
        docs: '/finance'
      },
      {
        name: 'government',
        npm: 'vietnamgovernment',
        docs: '/government'
      },
      {
        name: 'license-plates',
        npm: '',
        docs: '/license-plates'
      },
      {
        name: 'maps',
        npm: '',
        docs: '/maps'
      },
      {
        name: 'news',
        npm: 'vietnamnews',
        docs: '/news'
      },
      {
        name: 'phones',
        npm: '',
        docs: '/phones'
      },
      {
        name: 'technologies',
        npm: '',
        docs: '/technologies'
      },
      {
        name: 'sports',
        npm: '',
        docs: '/sports'
      },
      { name: 'vnltk', npm: 'vnapis', docs: '/vnltk' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));

    this.state = { query: '', apis, filterAPIs: apis };

    this.filterPackages = this.filterPackages.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  async updateQuery(event) {
    const { value = '' } = event.target;
    await this.setState({ query: value });
    const { query = '', apis = [], externalPackages = [] } = this.state;
    const filterAPIs = this.filterPackages(apis, query);
    const filterExternalPackages = this.filterPackages(externalPackages, query);
    this.setState({ filterAPIs, filterExternalPackages });
  }

  filterPackages(packages = [], query = '') {
    return packages.filter(_package => {
      const { name = '' } = _package;
      return query ? name.toLowerCase().includes(query.toLowerCase()) : true;
    });
  }

  renderTable(title, packages = []) {
    return (
      <Card className="shadow">
        <Card.Body>
          <Form className="w-100 mb-3">
            <Form.Control
              type="text"
              placeholder="Query"
              value={this.state.value}
              onChange={this.updateQuery}></Form.Control>
          </Form>
          <div className="table-responsive table-container h-60vh">
            <table className="table">
              <caption className="text-white text-center bg-danger">
                {title} ({packages.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Package</th>
                  <th>Docs</th>
                </tr>
              </thead>
              <tbody>
                {packages.length !== 0 &&
                  packages.map((_package, index) => {
                    const { name = '', npm = '', docs = '' } = _package;
                    return (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>
                          {npm && (
                            <a
                              href={`https://www.npmjs.com/package/${npm}`}
                              rel="noreferrer"
                              target="_blank">
                              npm
                            </a>
                          )}
                        </td>
                        <td>
                          {docs && (
                            <Link className="ml-1" to={docs}>
                              Docs
                            </Link>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const { filterAPIs = [] } = this.state;
    return (
      <div id="HomePackages">
        <div className="mt-3">{this.renderTable('APIs', filterAPIs)}</div>
      </div>
    );
  }
}

export default HomePackages;
