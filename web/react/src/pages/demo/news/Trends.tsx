import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface ITrendsProps {
  themeBadge: string;
  themeSpinnerVariant: string;
  themeBorder: string;
  themeTextColor: string;
  themeSecondaryBackgroundColor: string;
}

interface ITrendsState {
  trends: Array<any>;
  loading: boolean;
}

class Trends extends Component<ITrendsProps, ITrendsState> {
  constructor(props: ITrendsProps) {
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
      themeSpinnerVariant = '',
      themeBadge = ''
    } = this.props;

    return (
      <Card id="Trends" className={`${themeSecondaryBackgroundColor} ${themeBorder}`}>
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
                <Badge key={index} variant={themeBadge} className="mr-1">
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
  const themeBadge: string = _.get(state, 'theme.badge', '');
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeSecondaryBackgroundColor: string = _.get(state, 'theme.secondaryBackgroundColor', '');
  return {
    themeBadge,
    themeSpinnerVariant,
    themeBorder,
    themeTextColor,
    themeSecondaryBackgroundColor
  };
};

export default connect(mapStateToProps)(Trends);
