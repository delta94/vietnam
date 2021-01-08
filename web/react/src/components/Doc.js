import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { endpoints } from '../configs';

import Code from './Code';
import Table from './Table';

export default class Doc extends Component {
  constructor() {
    super();

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards(list) {
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Required', key: 'required' },
      { header: 'Type', key: 'type' },
      { header: 'Description', key: 'description' }
    ];
    return (
      <div>
        {list.map((endpoint, cardIndex) => {
          const { name, method, url, query = [], body = [] } = endpoint;
          return (
            <Card className="shadow mb-3" key={cardIndex}>
              <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <div className="mb-3">
                  <Code method={method} url={url}></Code>
                </div>
                {query.length > 0 && (
                  <Table
                    loading={false}
                    caption={'Request Query'}
                    rows={query}
                    rowConfigs={rowConfigs}></Table>
                )}
                {body.length > 0 && (
                  <Table
                    loading={false}
                    caption={'Request Body'}
                    rows={body}
                    rowConfigs={rowConfigs}></Table>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }

  render() {
    const { header, group } = this.props;
    const list = Object.values(endpoints[group]);
    return (
      <div id="Doc" className="mt-3">
        <h2 className="text-center mb-3">{header}</h2>
        {list.length > 0 && this.renderCards(list)}
      </div>
    );
  }
}
