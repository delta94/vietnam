import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IYouTubeTrendingProps {}

interface IYouTubeTrendingState {
  categoryId: string;
  categories: Array<any>;
  mapCategories: any;
  trending: Array<any>;
  loading: boolean;
}

export default class YouTubeTrending extends Component<
  IYouTubeTrendingProps,
  IYouTubeTrendingState
> {
  constructor(props: IYouTubeTrendingProps) {
    super(props);

    this.state = {
      categoryId: '',
      categories: [],
      mapCategories: {},
      trending: [],
      loading: true
    };

    this.getYouTubeTrending = this.getYouTubeTrending.bind(this);
    this.getYouTubeVideoCategories = this.getYouTubeVideoCategories.bind(this);
    this.updateVideoCategory = this.updateVideoCategory.bind(this);
  }

  async componentDidMount() {
    await this.getYouTubeVideoCategories();
    await this.getYouTubeTrending();
  }

  async getYouTubeVideoCategories() {
    const categories: Array<any> = await apis.getYouTubeVideoCategories();
    const mapCategories: any = {};
    for (const videoCategory of categories) {
      const { id, title } = videoCategory;
      mapCategories[id] = title;
    }
    this.setState({ categories, mapCategories });
  }

  async getYouTubeTrending(categoryId: number = 0) {
    const { mapCategories = {} } = this.state;
    this.setState({ loading: true });
    const videos: Array<any> = await apis.getYouTubeTrending(categoryId);
    const trending = videos.map(video => {
      const { categoryId } = video;
      const category: string = mapCategories[categoryId] || '';
      video.category = category;
      return video;
    });
    this.setState({ trending, loading: false });
  }

  async updateVideoCategory(event: any) {
    const { value: categoryId } = event.target;
    await this.setState({ categoryId });
    await this.getYouTubeTrending(categoryId);
  }

  render() {
    const { trending = [], loading = false, categoryId = '', categories = [] } = this.state;

    const rowConfigs = [
      { header: 'URL', key: 'url' },
      { header: 'Title', key: 'title' },
      { header: 'Category', key: 'category' }
    ];

    return (
      <div id="YouTubeTrending" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="ha-noi"
                  value={categoryId}
                  onChange={this.updateVideoCategory}>
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category.id}>
                        {category.title}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
            <Table
              loading={loading}
              caption={'Trending'}
              rows={trending}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
