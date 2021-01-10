import { Component } from 'react';

import { baseAPI } from '../configs';

interface ICURLProps {
  method?: string;
  url?: string;
  path?: string;
  headers?: Array<any>;
  query?: Array<any>;
  body?: Array<any>;
}

export default class CURL extends Component<ICURLProps> {
  constructor(props: ICURLProps) {
    super(props);

    this.buildQueryString = this.buildQueryString.bind(this);
    this.buildDataRaw = this.buildDataRaw.bind(this);
  }

  buildQueryString(query: any) {
    return query
      .map((item: any) => {
        const { name, type } = item;
        return `${name}=<${type}>`;
      })
      .join('&')
      .trim();
  }

  buildDataRaw(body: any) {
    const dataRaw: any = {};
    for (const item of body) {
      const { name, type } = item;
      dataRaw[name] = `<${type}>`;
    }
    return JSON.stringify(dataRaw, null, 2).replace(/"</g, '<').replace(/>"/g, '>');
  }

  render() {
    const { method = '', url = '', path = '', headers = [], query = [], body = [] } = this.props;
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
