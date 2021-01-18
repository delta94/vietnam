import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface ISportsVLeagueProps {}

interface ISportsVLeagueState {
  matches: Array<any>;
  leagueTable: Array<any>;
  loading: boolean;
}

export default class SportsVLeague extends Component<ISportsVLeagueProps, ISportsVLeagueState> {
  constructor(props: ISportsVLeagueProps) {
    super(props);

    this.state = { matches: [], leagueTable: [], loading: true };

    this.getVLeague = this.getVLeague.bind(this);
  }

  async componentDidMount() {
    await this.getVLeague();
  }

  async getVLeague() {
    this.setState({ loading: true });
    const res = await apis.getVLeague();
    const { matches = [], leagueTable = [] } = res;
    this.setState({ matches, leagueTable, loading: false });
  }

  render() {
    const { matches = [], leagueTable = [], loading = false } = this.state;

    const matchesRowConfigs: Array<any> = [
      { header: '#', key: 'round' },
      { header: 'Date Time', key: 'dateTime' },
      { header: 'Home', key: 'homeTeam' },
      { header: '', key: 'homeScore' },
      { header: '', key: 'awayScore' },
      { header: 'Away', key: 'awayTeam' }
    ];

    const leagueTableRowConfigs: Array<any> = [
      { header: '#', key: 'rank' },
      { header: 'Name', key: 'name' },
      { header: 'PTS', key: 'point' },
      { header: 'W', key: 'win' },
      { header: 'D', key: 'draw' },
      { header: 'L', key: 'lost' },
      { header: 'G', key: 'goal' },
      { header: 'GA', key: 'goalAgainst' },
      { header: 'GD', key: 'goalDifference' }
    ];

    return (
      <div id="SportsVLeague" className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <Card className="h-80vh overflow-auto mb-3">
              <Card.Body>
                <Table
                  loading={loading}
                  caption={'Matches'}
                  rows={matches}
                  rowConfigs={matchesRowConfigs}></Table>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card className="h-80vh overflow-auto">
              <Card.Body>
                <Table
                  loading={loading}
                  caption={'League Table'}
                  rows={leagueTable}
                  rowConfigs={leagueTableRowConfigs}></Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
