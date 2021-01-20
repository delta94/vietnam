import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface INewsTrendsProps {
  theme: string;
}

interface INewsTrendsState {
  trends: Array<any>;
  loading: boolean;
}

class NewsTrends extends Component<INewsTrendsProps, INewsTrendsState> {
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
    const { theme } = this.props;
    const borderColor: string = theme === 'light' ? '' : 'border-white';
    const bgColor: string = theme === 'light' ? 'bg-white' : 'bg-black';
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';

    return (
      <Card id="NewsTrends" className={`${bgColor} ${borderColor}`}>
        <Card.Body>
          <Card.Title className={`${textColor} text-center`}>Trends ({trends.length})</Card.Title>
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
                  <a key={index} href={url} target="_blank" rel="noreferrer" className="text-white">
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

const mapStateToProps = (state: any) => {
  const { theme = '' } = state;
  return { theme };
};

export default connect(mapStateToProps)(NewsTrends);
