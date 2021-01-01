import React, { Component } from 'react';
import { Form, Card } from 'react-bootstrap';
import VietceteraClient from 'vietcetera';

const vietcetera = new VietceteraClient();

class Vietcetera extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
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
    const basicArticles = await vietcetera.getArticles({ type });
    const articles = this.processArticles(basicArticles);
    console.log(articles);
    this.setState({ articles });
  }

  render() {
    const { articles = [] } = this.state;

    return (
      <div id="Vietcetera">
        <main className="container">
          <Form className="mt-3 w-100">
            <Form.Group>
              <Form.Control
                as="select"
                defaultValue="latest"
                value={this.state.value}
                onChange={this.getArticles}>
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="editor-pick">Editor Pick</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <div className="mb-5 row">
            {articles.length !== 0 &&
              articles.map((article, index) => {
                const { title = '', url = '', publishDate = '', description = '' } = article;
                return (
                  <div className="col-sm-6">
                    <Card key={index} className="mb-3">
                      <Card.Body>
                        <Card.Title>
                          <a href={url} target="_blank" rel="noreferrer">
                            {title}
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="text-muted">{publishDate}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    );
  }
}

export default Vietcetera;
