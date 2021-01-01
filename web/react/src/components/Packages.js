import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Packages extends Component {
  constructor(props) {
    super(props);
    const basicPackages = [
      { name: 'vnapis', demo: '' },
      { name: 'vietnamnews', demo: 'https://hieudoanm.github.io/vietnam/#/news' },
      { name: 'vietnambanks', demo: 'https://hieudoanm.github.io/vietnam/#/banks' },
      { name: 'vietnamgovernment', demo: '' },
      { name: 'vietcetera', demo: 'https://hieudoanm.github.io/vietnam/#/vietcetera' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));
    const paymentPackages = [
      { name: 'vnpay', demo: '' },
      { name: 'onepay', demo: '' },
      { name: 'vtcpay', demo: '' },
      { name: 'zalopay', demo: '' }
    ].sort((a, b) => (a.name > b.name ? 1 : -1));
    this.state = {
      basicPackages,
      filterBasicPackages: basicPackages,
      paymentPackages,
      filterPaymentPackages: paymentPackages
    };

    this.filterPackages = this.filterPackages.bind(this);
    this.renderPackages = this.renderPackages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { query = '' } = nextProps;
    const { basicPackages = [], paymentPackages = [] } = this.state;
    const filterBasicPackages = this.filterPackages(basicPackages, query);
    const filterPaymentPackages = this.filterPackages(paymentPackages, query);
    this.setState({ filterBasicPackages, filterPaymentPackages });
  }

  filterPackages(packages = [], query = '') {
    return packages.filter(_package => {
      const { name = '' } = _package;
      return query ? name.toLowerCase().includes(query.toLowerCase()) : true;
    });
  }

  renderPackages(title, packages = []) {
    return (
      <Card>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <ListGroup className="mt-3 mb-3 text-center">
            {packages.length !== 0 &&
              packages.map((_package, index) => {
                const { name = '', demo } = _package;
                return (
                  <ListGroup.Item key={index}>
                    <a
                      href={`https://www.npmjs.com/package/${name}`}
                      rel="noreferrer"
                      target="_blank">
                      {name}
                    </a>
                    {demo && (
                      <a className="ml-1" href={demo} target="_blank" rel="noreferrer">
                        (Demo)
                      </a>
                    )}
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
    const { filterBasicPackages = [], filterPaymentPackages = [] } = this.state;
    return (
      <div id="Packages">
        <div className="mt-3">{this.renderPackages('Basic', filterBasicPackages)}</div>
        <div className="mt-3">{this.renderPackages('Payment', filterPaymentPackages)}</div>
      </div>
    );
  }
}

export default Packages;
