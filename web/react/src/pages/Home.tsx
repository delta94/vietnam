import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';

interface IHomeProps {}

interface IHomeState {
  query: string;
  apis: Array<any>;
  filterAPIs: Array<any>;
  externalPackages: Array<any>;
  filterExternalPackages: Array<any>;
}

export default class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    const apis = [
      {
        name: 'banks',
        npm: 'vietnambanks',
        docs: '/banks'
      },
      {
        name: 'calendar',
        npm: 'vnapis#lunar-calendar',
        docs: '/calendar'
      },
      {
        name: 'ethnic-minorities',
        npm: 'vnapis#ethnic-minorities',
        docs: '/ethnic-minorities'
      },
      {
        name: 'finance',
        npm: 'vnapis#finance',
        docs: '/finance'
      },
      {
        name: 'government',
        npm: 'vnapis#government',
        docs: '/government'
      },
      {
        name: 'license-plates',
        npm: 'vnapis#license-plates',
        docs: '/license-plates'
      },
      {
        name: 'maps',
        npm: 'vnapis#maps',
        docs: '/maps'
      },
      {
        name: 'news',
        npm: 'vietnamnews',
        docs: '/news'
      },
      {
        name: 'phones',
        npm: 'vnapis#phones',
        docs: '/phones'
      },
      {
        name: 'sports',
        npm: 'vnapis#sports',
        docs: '/sports'
      },
      {
        name: 'technologies',
        npm: '',
        docs: '/technologies'
      },
      { name: 'vnltk', npm: 'vnapis#vnltk', docs: '/vnltk' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));

    this.state = {
      query: '',
      apis,
      filterAPIs: apis,
      externalPackages: [],
      filterExternalPackages: []
    };

    this.filterPackages = this.filterPackages.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  async updateQuery(event: any) {
    const { value = '' } = event.target;
    await this.setState({ query: value });
    const { query = '', apis = [], externalPackages = [] } = this.state;
    const filterAPIs = this.filterPackages(apis, query);
    const filterExternalPackages = this.filterPackages(externalPackages, query);
    await this.setState({ filterAPIs, filterExternalPackages });
  }

  filterPackages(packages: Array<any> = [], query: string = '') {
    return packages.filter(_package => {
      const { name = '' } = _package;
      return query ? name.toLowerCase().includes(query.toLowerCase()) : true;
    });
  }

  renderTable(title: string, packages: Array<any> = []) {
    return (
      <div id="table">
        <div className="table-responsive table-container">
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
      </div>
    );
  }

  render() {
    const { filterAPIs = [] } = this.state;
    return (
      <div id="Home" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Form className="mb-3">
              <Form.Control
                type="text"
                placeholder="Query"
                value={this.state.query}
                onChange={this.updateQuery}></Form.Control>
            </Form>
            {this.renderTable('APIs', filterAPIs)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
