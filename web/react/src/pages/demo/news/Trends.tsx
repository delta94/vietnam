import React, { Component } from 'react';
import { Badge, Card } from 'react-bootstrap';

import { apis } from '../../../services';

interface INewsTrendsProps {}

interface INewsTrendsState {
  trends: Array<any>;
}

export default class NewsTrends extends Component<INewsTrendsProps, INewsTrendsState> {
  constructor(props: INewsTrendsProps) {
    super(props);

    this.state = { trends: [] };

    this.getGoogleTrends = this.getGoogleTrends.bind(this);
  }

  async componentDidMount() {
    await this.getGoogleTrends();
  }

  async getGoogleTrends() {
    const trends = await apis.getGoogleTrends();
    this.setState({ trends });
  }

  render() {
    const { trends = [] } = this.state;

    return (
      <div id="NewsTrends" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Card.Title className="text-center">Trends ({trends.length})</Card.Title>
            {trends.length !== 0 &&
              trends.map((trend, index) => {
                const { text, url } = trend;
                return (
                  <Badge key={index} variant="danger" className="mr-1">
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
