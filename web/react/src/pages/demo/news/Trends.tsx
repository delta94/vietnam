import React, { Component } from 'react';
import { Badge, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface INewsTrendsProps {}

interface INewsTrendsState {
  trends: Array<any>;
  loading: boolean;
}

export default class NewsTrends extends Component<INewsTrendsProps, INewsTrendsState> {
  constructor(props: INewsTrendsProps) {
    super(props);

    this.state = { trends: [], loading: true };

    this.getGoogleTrends = this.getGoogleTrends.bind(this);
  }

  async componentDidMount() {
    await this.getGoogleTrends();
  }

  async getGoogleTrends() {
    await this.setState({ loading: true });
    const trends = await apis.getGoogleTrends();
    await this.setState({ trends, loading: false });
  }

  render() {
    const { trends = [], loading = true } = this.state;

    return (
      <Card id="NewsTrends">
        <Card.Body>
          <Card.Title className="text-center">Trends ({trends.length})</Card.Title>
          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="danger"></Spinner>
            </div>
          )}
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
    );
  }
}
