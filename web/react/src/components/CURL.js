import React, { Component } from 'react';

import { baseAPI } from '../configs';

export default class CURL extends Component {
  constructor() {
    super();

    this.buildQueryString = this.buildQueryString.bind(this);
    this.buildDataRaw = this.buildDataRaw.bind(this);
  }

  buildQueryString(query) {
    return query
      .map(item => {
        const { name, type } = item;
        return `${name}=<${type}>`;
      })
      .join('&')
      .trim();
  }

  buildDataRaw(body) {
    const dataRaw = {};
    for (const item of body) {
      const { name, type } = item;
      dataRaw[name] = `<${type}>`;
    }
    return JSON.stringify(dataRaw, null, 2).replace(/"</g, '<').replace(/>"/g, '>');
  }

  render() {
    const { method, url = '', path = '', headers = [], query = [], body = [] } = this.props;
    const queryString = this.buildQueryString(query);
    let api = url ? url : `${baseAPI}${path}`;
    api = queryString ? `${api}?${queryString}` : api;
    const dataRaw = this.buildDataRaw(body);
    return (
      <div id="CURL">
        <div className="p-3 bg-dark text-white rounded-lg">
          <pre className="m-0 text-white">
            <div>
              curl --location --request {method} <span className="text-yellow">'{api}'</span> \
            </div>
            {headers.length > 0 &&
              headers.map((header, index) => {
                const { key, value } = header;
                const lastFlag = headers.length - 1 === index;
                return (
                  <div key={index}>
                    --header{' '}
                    <span className="text-yellow">
                      {key}: {value}
                    </span>{' '}
                    {lastFlag && body.length > 0 && <span>\</span>}
                  </div>
                );
              })}
            {body.length > 0 && (
              <div>
                --data-raw <span className="text-yellow">'{dataRaw}'</span>
              </div>
            )}
          </pre>
        </div>
      </div>
    );
  }
}
