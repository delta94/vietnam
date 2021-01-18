import React, { Component } from 'react';
import { Form, Card, ListGroup, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IVietceteraProps {}

interface IVietceteraState {
  articles: Array<any>;
  loading: boolean;
  type: string;
}

export default class Vietcetera extends Component<IVietceteraProps, IVietceteraState> {
  constructor(props: IVietceteraProps) {
    super(props);

    this.state = { articles: [], loading: false, type: '' };

    this.getArticles = this.getArticles.bind(this);
  }

  async componentDidMount() {
    const type = 'latest';
    await this.setState({ loading: true });
    const articles = await apis.getVietceteraArticles(type);
    await this.setState({ articles, loading: false });
  }

  async getArticles(event: any) {
    const { value: type = '' } = event.target;
    await this.setState({ loading: true });
    const articles = await apis.getVietceteraArticles(type);
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
      <div id="Vietcetera" className="container-fluid">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Vietcetera ({articles.length})</Card.Title>
            <Card.Subtitle className="text-center mb-3">
              <a href={`https://www.npmjs.com/package/vietcetera`} rel="noreferrer" target="_blank">
                vietcetera
              </a>
            </Card.Subtitle>
            <Form className="mt-3 w-100">
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="latest"
                  value={this.state.type}
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
                      <Card.Subtitle className="small text-muted mb-1">{publishDate}</Card.Subtitle>
                      <Card.Text>{description}</Card.Text>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
