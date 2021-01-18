import React, { Component } from 'react';
import { Card, Form, ListGroup, Spinner } from 'react-bootstrap';

import { apis, helper } from '../../../services';

import Trends from './Trends';

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
      loading: true,
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
    this.renderArticles = this.renderArticles.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    await this.getSources();
    await this.getCategories();
    await this.getArticles();
  }

  async getCategories() {
    const { source } = this.state;
    const categories = await apis.getCategories(source);
    await this.setState({ categories });
  }

  async getSources() {
    const sources = await apis.getSources();
    await this.setState({ sources });
  }

  async updateCategory(event: any) {
    const { value: category } = event.target;
    this.setState({ category });
    await this.getArticles();
  }

  async updateSource(event: any) {
    const { value: source } = event.target;
    await this.setState({ source });
    await this.getCategories();
    await this.getArticles();
  }

  async getArticles() {
    const { category = '', source = '' } = this.state;
    await this.setState({ loading: true });
    const articles = await apis.getArticles(source, category);
    this.setState({ articles, loading: false });
  }

  renderForm() {
    const { categories = [], sources = [] } = this.state;
    return (
      <Form className="w-100">
        <div className="row">
          {sources.length > 0 && (
            <div className="col-sm-6">
              <Form.Group>
                <Form.Control
                  as="select"
                  aria-labelledby="Source"
                  value={this.state.source}
                  onChange={this.updateSource}>
                  <option value={''}>Source</option>
                  {sources.map((source, index) => {
                    return (
                      <option key={index} value={source}>
                        {helper.capitalize(source)}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </div>
          )}
          {categories.length > 0 && (
            <div className="col-sm-6">
              <Form.Group>
                <Form.Control
                  as="select"
                  aria-labelledby="Category"
                  value={this.state.category}
                  onChange={this.updateCategory}>
                  <option value={''}>Category</option>
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
          )}
        </div>
      </Form>
    );
  }

  renderArticles() {
    const { articles } = this.state;
    return (
      <div>
        {articles.length === 0 && (
          <div className="p-3 text-center text-uppercase rounded border">NO VIDEOS</div>
        )}
        {articles.length !== 0 && (
          <Card className="h-70vh overflow-auto">
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="text-center text-white bg-danger">
                Articles ({articles.length})
              </ListGroup.Item>
              {articles.map((article = {}, index) => {
                const {
                  title = '',
                  url = '',
                  source = '',
                  publishedDate = '',
                  description = ''
                } = article;
                const startIndex: number = description.indexOf('<img');
                const endIndex: number = description.indexOf('/>');
                let short = '';
                if (startIndex > -1 && endIndex > startIndex) {
                  short = `${description.substring(0, startIndex)}${description.substring(
                    endIndex + 2,
                    description.length
                  )}`;
                }
                return (
                  <ListGroup.Item key={index}>
                    <Card.Title>
                      <a href={url} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="d-block text-muted mb-1">
                      {source && <small>{source}</small>} -{' '}
                      {publishedDate && <small>({publishedDate})</small>}
                    </Card.Subtitle>
                    <Card.Text>
                      <span dangerouslySetInnerHTML={{ __html: short }}></span>
                    </Card.Text>
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
    const { loading = true } = this.state;

    return (
      <div id="NewsFeed" className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="mb-3">
              <Trends></Trends>
            </div>
          </div>
          <div className="col-sm-9">
            {this.renderForm()}
            {loading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger"></Spinner>
              </div>
            )}
            {!loading && this.renderArticles()}
          </div>
        </div>
      </div>
    );
  }
}
