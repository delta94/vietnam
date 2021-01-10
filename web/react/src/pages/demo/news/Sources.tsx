import React, { Component } from 'react';
import { Card, Badge, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface INewsSourcesProps {}

interface INewsSourcesState {
  sources: Array<any>;
  loading: boolean;
}

export default class NewsSources extends Component<INewsSourcesProps, INewsSourcesState> {
  constructor(props: INewsSourcesProps) {
    super(props);

    this.state = { sources: [], loading: true };

    this.getSources = this.getSources.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getSources();
  }

  async getSources() {
    this.setState({ loading: true });
    const sources = await apis.getSources();
    this.setState({ sources, loading: false });
  }

  renderTable(loading: boolean, sources: Array<any> = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-center text-white bg-danger">
                Sources ({sources.length})
              </caption>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Categories</th>
                </tr>
              </thead>
              <tbody>
                {sources.length
                  ? sources.map((source, index) => {
                      const {
                        id = '',
                        name = '',
                        url = '',
                        category = '',
                        categories = []
                      } = source;
                      return (
                        <tr key={index}>
                          <td>{id}</td>
                          <td>
                            <a href={url} target="_blank" rel="noreferrer">
                              {name}
                            </a>
                          </td>
                          <td>{category}</td>
                          <td>
                            {categories.map((category: string, index: number) => {
                              return (
                                <Badge key={index} variant="danger" className="text-white mr-1">
                                  {category}
                                </Badge>
                              );
                            })}
                          </td>
                        </tr>
                      );
                    })
                  : ''}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { sources = [], loading } = this.state;

    return (
      <div id="NewsSources" className="container">
        <Card className="shadow mt-3">
          <Card.Body>{this.renderTable(loading, sources)}</Card.Body>
        </Card>
      </div>
    );
  }
}
