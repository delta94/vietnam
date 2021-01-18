import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IMusicArtistsProps {}

interface IMusicArtistsState {
  artists: Array<any>;
  loading: boolean;
}

export default class MusicArtists extends Component<IMusicArtistsProps, IMusicArtistsState> {
  constructor(props: IMusicArtistsProps) {
    super(props);

    this.state = { artists: [], loading: true };

    this.getMusicArtists = this.getMusicArtists.bind(this);
  }

  async componentDidMount() {
    await this.getMusicArtists();
  }

  async getMusicArtists() {
    this.setState({ loading: true });
    const artists: Array<any> = await apis.getMusicArtists();
    this.setState({ artists, loading: false });
  }

  render() {
    const { artists = [], loading = false } = this.state;

    const rowConfigs = [{ header: 'Name', key: 'name' }];

    return (
      <div id="MusicArtists" className="container-fluid">
        <Card>
          <Card.Body>
            <Table
              loading={loading}
              caption={'Artists'}
              rows={artists}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
