import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class HomePackages extends Component {
  constructor(props) {
    super(props);
    const apis = [
      {
        name: 'banks',
        npm: 'vietnambanks',
        docs: 'https://hieudoanm.github.io/vietnam/#/banks'
      },
      {
        name: 'calendar',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/calendar'
      },
      {
        name: 'ethnic-minorities',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/ethnic-minorities'
      },
      {
        name: 'finance',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/finance'
      },
      {
        name: 'government',
        npm: 'vietnamgovernment',
        docs: 'https://hieudoanm.github.io/vietnam/#/government'
      },
      {
        name: 'license-plates',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/license-plates'
      },
      {
        name: 'maps',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/maps'
      },
      {
        name: 'news',
        npm: 'vietnamnews',
        docs: 'https://hieudoanm.github.io/vietnam/#/news'
      },
      {
        name: 'phones',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/phones'
      },
      {
        name: 'technologies',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/technologies'
      },
      {
        name: 'sports',
        npm: '',
        docs: 'https://hieudoanm.github.io/vietnam/#/sports'
      },
      { name: 'vnltk', npm: 'vnapis', docs: 'https://hieudoanm.github.io/vietnam/#/vnltk' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));

    this.state = {
      apis,
      filterAPIs: apis
    };

    this.filterPackages = this.filterPackages.bind(this);
    this.renderPackages = this.renderPackages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { query = '' } = nextProps;
    const { apis = [], externalPackages = [] } = this.state;
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

  renderPackages(title, packages = []) {
    return (
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center">
            {title} ({packages.length})
          </Card.Title>
          <ListGroup className="mt-3 mb-3 text-center">
            {packages.length !== 0 &&
              packages.map((_package, index) => {
                const { name = '', npm = '', docs = '' } = _package;
                return (
                  <ListGroup.Item
                    className="d-flex justify-content-between align-items-center"
                    key={index}>
                    {name}
                    <span>
                      {npm && (
                        <a
                          href={`https://www.npmjs.com/package/${npm}`}
                          rel="noreferrer"
                          target="_blank">
                          npm -
                        </a>
                      )}
                      {docs && (
                        <a className="ml-1" href={docs} target="_blank" rel="noreferrer">
                          Docs
                        </a>
                      )}
                    </span>
                  </ListGroup.Item>
                );
              })}
            {packages.length === 0 && <ListGroup.Item>No packages</ListGroup.Item>}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const { filterAPIs = [] } = this.state;
    return (
      <div id="HomePackages">
        <div className="mt-3">{this.renderPackages('APIs', filterAPIs)}</div>
      </div>
    );
  }
}

export default HomePackages;
