import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import { HomePackages } from '../components';

class Home extends Component {
  constructor() {
    super();
    this.state = { query: '' };
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(event) {
    const { value: query = '' } = event.target;
    this.setState({ query });
  }

  render() {
    const { query } = this.state;

    return (
      <div id="Home">
        <main className="container">
          <Form className="mt-3 w-100">
            <Form.Control
              type="text"
              placeholder="Query"
              value={this.state.value}
              onChange={this.updateQuery}></Form.Control>
          </Form>
          <HomePackages query={query}></HomePackages>
        </main>
      </div>
    );
  }
}

export default Home;
