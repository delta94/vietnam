import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';

import { apis } from '../../services';

class NewsSources extends Component {
  constructor() {
    super();
    this.state = { sources: [] };
    this.getSources = this.getSources.bind(this);
  }

  async componentDidMount() {
    await this.getSources();
  }

  async getSources() {
    const self = this;
    const sources = await apis.getSources();
    self.setState({ sources });
  }

  render() {
    const { sources = [] } = this.state;

    return (
      <div id="NewsSources">
        <div className="row mt-3">
          {sources.map((source = {}, index) => {
            const { id = '', name = '', url = '', category = '', categories = [] } = source;
            return (
              <div key={index} className="col-sm-6 mb-3">
                <Card className="w-100">
                  <Card.Body>
                    <Card.Title>
                      <a href={url} target="_blank" rel="noreferrer">
                        {id} - {name}
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="d-block text-muted mb-1">
                      {category && <small>{category}</small>}
                    </Card.Subtitle>
                    {categories.map((category, index) => {
                      return (
                        <Badge key={index} variant="danger" className="text-white mr-1">
                          {category}
                        </Badge>
                      );
                    })}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewsSources;
