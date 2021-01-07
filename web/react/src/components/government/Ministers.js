import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentMinisters extends Component {
  constructor() {
    super();

    this.state = { ministry: '', ministries: [], ministers: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
    this.getMinisters = this.getMinisters.bind(this);
    this.updateMinistry = this.updateMinistry.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
    await this.getMinisters();
  }

  async getMinistries() {
    const ministries = await apis.getMinistries();
    const { short: ministry = '' } = ministries[0];
    this.setState({ ministry, ministries });
  }

  async getMinisters() {
    const { ministry } = this.state;
    this.setState({ loading: true });
    const ministers = await apis.getMinisters(ministry);
    this.setState({ ministers, loading: false });
  }

  async updateMinistry(event) {
    const { value: ministry } = event.target;
    await this.setState({ ministry });
    await this.getMinisters();
  }

  renderTable(loading, ministers = []) {
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
              <caption className="text-center text-white bg-danger">
                Ministers ({ministers.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {ministers.length
                  ? ministers.map((minister, index) => {
                      const { name = '', start_date = '', end_date = '' } = minister;
                      return (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>{start_date}</td>
                          <td>{end_date.toUpperCase()}</td>
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
    const { ministers = [], ministries = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('ministries', ministries);

    return (
      <div id="GovernmentMinisters">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Form className="mt-3 w-100">
                <Form.Group>
                  <Form.Control
                    as="select"
                    defaultValue="latest"
                    value={this.state.value}
                    onChange={this.updateMinistry}>
                    {ministries.map((ministry, index) => {
                      const { short, name } = ministry;
                      return (
                        <option key={index} value={short}>
                          {name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Form>
              {this.renderTable(loading, ministers)}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentMinisters;
