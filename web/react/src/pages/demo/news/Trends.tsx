import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface INewsTrendsProps {
  themeSpinnerVariant: string;
  themeBorder: string;
  themeTextColor: string;
  themeSecondaryBackgroundColor: string;
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
    const {
      themeBorder = '',
      themeTextColor = '',
      themeSecondaryBackgroundColor = '',
      themeSpinnerVariant = ''
    } = this.props;

    return (
      <Card id="NewsTrends" className={`${themeSecondaryBackgroundColor} ${themeBorder}`}>
        <Card.Body>
          <Card.Title className={`${themeTextColor} text-center`}>
            Trends ({trends.length})
          </Card.Title>
          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
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
  const themeBorder = _.get(state, 'theme.border', '');
  const themeSpinnerVariant = _.get(state, 'theme.spinnerVariant', '');
  const themeTextColor = _.get(state, 'theme.textColor', '');
  const themeSecondaryBackgroundColor = _.get(state, 'theme.secondaryBackgroundColor', '');
  return { themeSpinnerVariant, themeBorder, themeTextColor, themeSecondaryBackgroundColor };
};

export default connect(mapStateToProps)(NewsTrends);
