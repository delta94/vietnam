import React, { Component } from 'react';
import { Card, Form, ListGroup, Spinner } from 'react-bootstrap';

import { apis, helper } from '../../../services';

interface INewsFeedProps {}

interface INewsFeedState {
  category: string;
  categories: Array<any>;
  source: string;
  sources: Array<any>;
  articles: Array<any>;
  loading: boolean;
}

export default class NewsFeed extends Component<INewsFeedProps, INewsFeedState> {
  constructor(props: INewsFeedProps) {
    super(props);

    this.state = {
      loading: false,
      category: '',
      categories: [],
      source: '',
      sources: [],
      articles: []
    };

    this.getCategories = this.getCategories.bind(this);
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateSource = this.updateSource.bind(this);
  }

  async componentDidMount() {
    await this.getCategories();
    await this.getSources();
    await this.getArticles();
  }

  async getCategories() {
    const categories = await apis.getCategories();
    const [category = ''] = categories;
    this.setState({ category, categories });
  }

  async getSources() {
    const sources = await apis.getSources();
    const [source = {}] = sources;
    const { id } = source;
    this.setState({ source: id, sources });
  }

  async updateCategory(event: any) {
    const { value: category } = event.target;
    this.setState({ category });
    await this.getArticles();
  }

  async updateSource(event: any) {
    const { value: source } = event.target;
    this.setState({ source });
    await this.getArticles();
  }

  async getArticles() {
    const { category = '', source = '' } = this.state;
    await this.setState({ loading: true });
    const articles = await apis.getArticles({ category, source });
    this.setState({ articles, loading: false });
  }

  render() {
    const { articles = [], categories = [], sources = [], loading } = this.state;

    return (
      <div id="NewsFeed" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Form className="mt-3 w-100">
              <div className="row mb-3">
                <div className="col-sm-6">
                  <Form.Group>
                    <Form.Control
                      as="select"
                      defaultValue="latest"
                      value={this.state.category}
                      onChange={this.updateCategory}>
                      {categories.map((category, index) => {
                        return (
                          <option key={index} value={category}>
                            {helper.capitalize(category)}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group>
                    <Form.Control
                      as="select"
                      defaultValue="latest"
                      value={this.state.source}
                      onChange={this.updateSource}>
                      {sources.map((source, index) => {
                        return (
                          <option key={index} value={source.id}>
                            {source.name}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <ListGroup className="mt-3">
                {loading && (
                  <div className="text-center">
                    <Spinner animation="border" variant="danger"></Spinner>
                  </div>
                )}
                {!loading &&
                  articles.length !== 0 &&
                  articles.map((article = {}, index) => {
                    const {
                      title = '',
                      url = '',
                      source = '',
                      dateTimeString = '',
                      description = ''
                    } = article;
                    return (
                      <ListGroup.Item key={index}>
                        <Card.Title>
                          <a href={url} target="_blank" rel="noreferrer">
                            {title}
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="d-block text-muted mb-1">
                          {source && <small>{source}</small>} -
                          {dateTimeString && <small>{dateTimeString}</small>}
                        </Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
