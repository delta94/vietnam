import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class MapsProvinces extends Component {
  constructor() {
    super();

    this.state = { provinces: [], loading: true };

    this.getProvinces = this.getProvinces.bind(this);
  }

  async componentDidMount() {
    await this.getProvinces();
  }

  async getProvinces() {
    const self = this;

    self.setState({ loading: true });
    const provinces = await apis.getProvinces();
    self.setState({ provinces, loading: false });
  }

  render() {
    const { provinces, loading } = this.state;
    return (
      <div id="MapsProvinces">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Provinces ({provinces.length})</Card.Title>
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="danger"></Spinner>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapsProvinces;
