import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IArtistsProps {}

interface IArtistsState {
  artists: Array<any>;
  loading: boolean;
}

class Artists extends Component<IArtistsProps, IArtistsState> {
  constructor(props: IArtistsProps) {
    super(props);

    this.state = { artists: [], loading: true };

    this.getArtists = this.getArtists.bind(this);
  }

  async componentDidMount() {
    await this.getArtists();
  }

  async getArtists() {
    this.setState({ loading: true });
    const artists: Array<any> = await apis.getArtists();
    this.setState({ artists, loading: false });
  }

  render() {
    const { artists = [], loading = false } = this.state;

    const rowConfigs = [{ header: 'Name', key: 'name' }];

    return (
      <div id="Artists" className="container-fluid">
        <Table loading={loading} caption={'Artists'} rows={artists} rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Artists);
