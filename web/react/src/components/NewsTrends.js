import React, { Component } from 'react';
import { Badge, Card } from 'react-bootstrap';

import { baseAPI } from '../configs';

class NewsTrends extends Component {
  constructor() {
    super();
    this.state = { trends: [] };
    this.getGoogleTrends = this.getGoogleTrends.bind(this);
  }

  async componentDidMount() {
    await this.getGoogleTrends();
  }

  async getGoogleTrends() {
    const self = this;
    const url = `${baseAPI}/news/trends`;

    fetch(url)
      .then(res => res.json())
      .then(response => {
        const basicTrends = response || [];
        const trends = basicTrends.map(text => {
          const url = `https://www.google.com/search?q=${encodeURI(text)}`;
          return { text, url };
        });
        console.log('getGoogleTrends', trends);
        self.setState({ trends });
      });
  }

  render() {
    const { trends = [] } = this.state;
    console.log('render', trends);
    return (
      <div id="NewsTrends">
        <Card className="shadow mt-3 mb-3">
          <Card.Body>
            <Card.Title>Trends ({trends.length})</Card.Title>
            {trends.length !== 0 &&
              trends.map((trend, index) => {
                const { text, url } = trend;
                return (
                  <Badge key={index} variant="primary" className="mr-1">
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className=" text-white">
                      {text}
                    </a>
                  </Badge>
                );
              })}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsTrends;
