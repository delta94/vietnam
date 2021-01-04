import React, { Component } from 'react';
import { Form, Card, ListGroup, Spinner } from 'react-bootstrap';
import VietceteraClient from 'vietcetera';

const vietcetera = new VietceteraClient();

class Vietcetera extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false };
    this.getArticles = this.getArticles.bind(this);
    this.processArticles = this.processArticles.bind(this);
  }

  async componentDidMount() {
    const type = 'latest';
    const basicArticles = await vietcetera.getArticles({ type });
    const articles = this.processArticles(basicArticles);
    this.setState({ articles });
  }

  processArticles(articles = []) {
    return articles.map((article = {}) => {
      const { title = '', slug = '', language = '', publishDate = '', excerpt = '' } = article;
      const url =
        language && slug ? `https://vietcetera.com/${language.toLowerCase()}/${slug}` : '';
      const description = excerpt.replace('<p>', '').replace('</p>', '');
      return { title, url, publishDate, description };
    });
  }

  async getArticles(event) {
    const { value: type = '' } = event.target;
    await this.setState({ loading: true });
    const basicArticles = await vietcetera.getArticles({ type });
    const articles = this.processArticles(basicArticles);
    await this.setState({ articles, loading: false });
  }

  render() {
    const { articles = [], loading } = this.state;

    const options = [
      {
        value: 'latest',
        text: 'Latest'
      },
      {
        value: 'popular',
        text: 'Popular'
      },
      {
        value: 'editor-pick',
        text: 'Editor Pick'
      }
    ];
    return (
      <div id="Vietcetera">
        <main className="container">
          <Card className="shadow mt-3">
            <Card.Body>
              <Card.Title className="text-center">Vietcetera ({articles.length})</Card.Title>
              <Card.Subtitle className="text-center mb-3">
                <a
                  href={`https://www.npmjs.com/package/vietcetera`}
                  rel="noreferrer"
                  target="_blank">
                  vietcetera
                </a>
              </Card.Subtitle>
              <Form className="mt-3 w-100">
                <Form.Group>
                  <Form.Control
                    as="select"
                    defaultValue="latest"
                    value={this.state.value}
                    onChange={this.getArticles}>
                    {options.map((option, index) => {
                      const { text, value } = option;
                      return (
                        <option key={index} value={value}>
                          {text}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Form>
              <ListGroup className="mt-3">
                {loading && (
                  <div className="text-center">
                    <Spinner animation="border" variant="danger"></Spinner>
                  </div>
                )}
                {!loading &&
                  articles.length !== 0 &&
                  articles.map((article, index) => {
                    const { title = '', url = '', publishDate = '', description = '' } = article;
                    return (
                      <ListGroup.Item key={index}>
                        <Card.Title>
                          <a href={url} target="_blank" rel="noreferrer">
                            {title}
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="small text-muted mb-1">
                          {publishDate}
                        </Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card.Body>
          </Card>
        </main>
      </div>
    );
  }
}

export default Vietcetera;
