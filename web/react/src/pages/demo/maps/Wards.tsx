import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IMapsWardsProps {}

interface IMapsWardsState {
  wards: Array<any>;
  loading: boolean;
}

export default class MapsWards extends Component<IMapsWardsProps, IMapsWardsState> {
  constructor(props: IMapsWardsProps) {
    super(props);

    this.state = { wards: [], loading: true };

    this.getMapsWards = this.getMapsWards.bind(this);
  }

  async componentDidMount() {
    await this.getMapsWards();
  }

  async getMapsWards() {
    this.setState({ loading: true });
    const wards = await apis.getMapsWards();
    this.setState({ wards, loading: false });
  }

  render() {
    const { wards, loading } = this.state;
    return (
      <div id="MapsWards" className="container">
        <Card className="shadow mt-3">
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
    );
  }
}
