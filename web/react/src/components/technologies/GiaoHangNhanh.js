import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GiaoHangNhanh extends Component {
  constructor() {
    super();

    this.state = { provinces: [], loading: true };

    this.getGHNProvinces = this.getGHNProvinces.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getGHNProvinces();
  }

  async getGHNProvinces() {
    this.setState({ loading: true });
    const provinces = await apis.getGHNProvinces();
    this.setState({ provinces, loading: false });
  }

  renderTable(loading, provinces = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-white text-center bg-danger">
                Provinces ({provinces.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Province ID</th>
                  <th>Code</th>
                </tr>
              </thead>
              <tbody>
                {provinces.length
                  ? provinces.map((province, index) => {
                      const { name = '', province_id = 0, code = '' } = province;
                      return (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>{province_id}</td>
                          <td>{code}</td>
                        </tr>
                      );
                    })
                  : ''}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { provinces, loading } = this.state;
    return (
      <div id="GiaoHangNhanh">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center mb-3">Giao Hang Nhanh</Card.Title>
              <Card.Subtitle className="text-center mb-3">
                <a
                  href={`https://www.npmjs.com/package/giaohangnhanh`}
                  rel="noreferrer"
                  target="_blank">
                  npm
                </a>
              </Card.Subtitle>
              {this.renderTable(loading, provinces)}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GiaoHangNhanh;
