import React, { Component } from 'react';
import { Card, Form, Spinner, ListGroup } from 'react-bootstrap';

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
    this.renderForm = this.renderForm.bind(this);
    this.renderCards = this.renderCards.bind(this);
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

  renderForm() {
    const { categories, categoryId } = this.state;
    return (
      <Form>
        <Form.Group>
          <Form.Control as="select" value={categoryId} onChange={this.updateVideoCategory}>
            <option value={''}>Category</option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category.id}>
                  {category.id} - {category.title}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  renderCards() {
    const { trending = [] } = this.state;
    return (
      <div>
        {trending.length === 0 && (
          <div className="p-3 text-center text-uppercase rounded border">NO VIDEOS</div>
        )}
        {trending.length > 0 && (
          <Card className="h-70vh overflow-auto">
            <ListGroup className="list-group-flush">
              {trending.map((video: any, index: number) => {
                const { title, url, channelId, channelTitle } = video;
                const channelUrl: string = `https://www.youtube.com/channel/${channelId}`;
                return (
                  <ListGroup.Item key={index}>
                    <h6 className="m-0">
                      <a href={url} className="text-dark" target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </h6>
                    <small>
                      <a href={channelUrl} className="text-muted" target="_blank" rel="noreferrer">
                        {channelTitle}
                      </a>
                    </small>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        )}
      </div>
    );
  }

  render() {
    const { loading = false } = this.state;

    return (
      <div id="YouTubeTrending" className="container-fluid">
        {this.renderForm()}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && this.renderCards()}
      </div>
    );
  }
}
