import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { apis } from '../../services';
import { capitalize } from '../../helper';

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = { category: '', categories: [], source: '', sources: [], articles: [] };
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
    const self = this;
    const categories = await apis.getCategories();
    self.setState({ categories });
  }

  async getSources() {
    const self = this;
    const sources = await apis.getSources();
    self.setState({ sources });
  }

  updateCategory(event) {
    const { value: category } = event.target;
    this.setState({ category });
  }

  async updateSource(event) {
    const { value: source } = event.target;
    this.setState({ source });
    await this.getArticles();
  }

  async getArticles() {
    const self = this;
    const { category = '', source = '' } = this.state;
    const articles = await apis.getArticles({ category, source });
    self.setState({ articles });
  }

  render() {
    const { articles = [], categories = [], sources = [] } = this.state;

    return (
      <div id="NewsFeed">
        <Form className="mt-3 w-100">
          <div className="row mb-3">
            <div className="col-sm-6">
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="latest"
                  value={this.state.value}
                  onChange={this.updateCategory}>
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category}>
                        {capitalize(category)}
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
                  value={this.state.value}
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
          <div className="row">
            {articles.length &&
              articles.map((article = {}, index) => {
                const {
                  title = '',
                  url = '',
                  source = '',
                  dateTimeString = '',
                  description = ''
                } = article;
                return (
                  <div key={index} className="col-sm-6 mb-3">
                    <Card className="w-100">
                      <Card.Body>
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
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </Form>
      </div>
    );
  }
}

export default NewsFeed;
