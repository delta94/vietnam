import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class MapsProvinces extends Component {
  constructor() {
    super();

    this.state = { provinces: [], loading: true };

    this.getMapsProvinces = this.getMapsProvinces.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getMapsProvinces();
  }

  async getMapsProvinces() {
    this.setState({ loading: true });
    const provinces = await apis.getMapsProvinces();
    this.setState({ provinces, loading: false });
  }

  renderTable(loading, provinces) {
    return (
      <div className="table-responsive table-container">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <table className="table">
            <caption className="text-white text-center bg-danger">
              Provinces ({provinces.length})
            </caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Macro Region</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {provinces.length
                ? provinces.map((province, index) => {
                    const { name = '', capital = '', region = '', macro_region = '' } = province;
                    return (
                      <tr key={index}>
                        <td>{name}</td>
                        <td>{capital}</td>
                        <td>{macro_region}</td>
                        <td>{region}</td>
                      </tr>
                    );
                  })
                : ''}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  render() {
    const { provinces, loading } = this.state;
    return (
      <div id="MapsProvinces">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, provinces)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapsProvinces;
