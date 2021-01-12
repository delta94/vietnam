import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IYouTubeVideoCategoriesProps {}

interface IYouTubeVideoCategoriesState {
  categories: Array<any>;
  loading: boolean;
}

export default class YouTubeVideoCategories extends Component<
  IYouTubeVideoCategoriesProps,
  IYouTubeVideoCategoriesState
> {
  constructor(props: IYouTubeVideoCategoriesProps) {
    super(props);

    this.state = { categories: [], loading: true };

    this.getYouTubeVideoCategories = this.getYouTubeVideoCategories.bind(this);
  }

  async componentDidMount() {
    await this.getYouTubeVideoCategories();
  }

  async getYouTubeVideoCategories() {
    this.setState({ loading: true });
    const categories: Array<any> = await apis.getYouTubeVideoCategories();
    this.setState({ categories, loading: false });
  }

  render() {
    const { categories = [], loading = false } = this.state;

    const rowConfigs = [
      { header: 'ID', key: 'id' },
      { header: 'Title', key: 'title' },
      { header: 'Assignable', key: 'assignable' },
      { header: 'Channel ID', key: 'channelId' }
    ];

    return (
      <div id="YouTubeVideoCategories" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Video Categories'}
              rows={categories}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
