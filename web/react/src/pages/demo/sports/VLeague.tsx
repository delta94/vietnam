import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, NavPills } from '../../../components';
import { apis } from '../../../services';

interface IVLeagueProps {}

interface IVLeagueState {
  matches: Array<any>;
  leagueTable: Array<any>;
  loading: boolean;
}

class VLeague extends Component<IVLeagueProps, IVLeagueState> {
  constructor(props: IVLeagueProps) {
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
      <div id="VLeague" className="container-fluid">
        <NavPills group={'sports'}></NavPills>
        <div className="row">
          <div className="col-sm-6">
            <div className="content-height overflow-auto">
              <Table
                loading={loading}
                caption={'Matches'}
                rows={matches}
                rowConfigs={matchesRowConfigs}></Table>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="content-height overflow-auto">
              <Table
                loading={loading}
                caption={'League Table'}
                rows={leagueTable}
                rowConfigs={leagueTableRowConfigs}></Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(VLeague);
