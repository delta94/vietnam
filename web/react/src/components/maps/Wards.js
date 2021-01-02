import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class MapsWards extends Component {
  constructor() {
    super();

    this.state = { wards: [], loading: true };

    this.getWards = this.getWards.bind(this);
  }

  async componentDidMount() {
    await this.getWards();
  }

  async getWards() {
    const self = this;

    self.setState({ loading: true });
    const wards = await apis.getWards();
    self.setState({ wards, loading: false });
  }

  render() {
    const { wards, loading } = this.state;
    return (
      <div id="MapsWards">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Wards ({wards.length})</Card.Title>
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

export default MapsWards;
