import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

import { endpoints } from '../configs';

import API from './API';
import CURL from './CURL';
import Table from './Table';

interface IDocProps {
  header?: string;
  group: any;
}

interface IDocState {
  endpoints: any;
}

export default class Doc extends Component<IDocProps, IDocState> {
  constructor(props: IDocProps) {
    super(props);

    this.state = { endpoints };

    this.renderAPIs = this.renderAPIs.bind(this);
    this.renderRequest = this.renderRequest.bind(this);
    this.renderResponses = this.renderResponses.bind(this);
  }

  renderRequest(request: any, method: string, path: string) {
    const { headers = [], query = [], body = [] } = request;
    const requestRowConfigs = [
      { header: 'Name', key: 'name', className: 'font-weight-bold' },
      { header: 'Required', key: 'required' },
      { header: 'Type', key: 'type' },
      { header: 'Description', key: 'description' }
    ];
    return (
      <div id="DocRequest">
        {query.length > 0 && (
          <div className="mb-5">
            <Table
              header={'Query String'}
              rows={query}
              rowConfigs={requestRowConfigs}
              emptyRowsText={'No Query String'}></Table>
          </div>
        )}
        {body.length > 0 && (
          <div className="mb-5">
            <Table
              header={'Request Body'}
              rows={body}
              rowConfigs={requestRowConfigs}
              emptyRowsText={'No Request Body'}></Table>
          </div>
        )}
        <div className="mb-5">
          <CURL method={method} path={path} headers={headers} body={body} query={query}></CURL>
        </div>
      </div>
    );
  }

  renderResponses(response: any) {
    const responseRowConfigs = [
      { header: 'Name', key: 'name', className: 'font-weight-bold' },
      { header: 'Type', key: 'type' },
      { header: 'Description', key: 'description' }
    ];
    const responseCodes = Object.keys(response);
    return (
      <div id="DocResponses" className="mb-5">
        <h5>Responses</h5>
        {responseCodes.length > 0 && (
          <Tabs defaultActiveKey="200" id="responses-tabs">
            {responseCodes.map((code, index) => {
              const { schema } = response[code] || {};
              return (
                <Tab key={index} eventKey={code} title={code} className="border-0">
                  <div className="mt-1">
                    <Table loading={false} rows={schema} rowConfigs={responseRowConfigs}></Table>
                  </div>
                </Tab>
              );
            })}
          </Tabs>
        )}
      </div>
    );
  }

  renderAPIs(list: Array<any>) {
    return (
      <div id="DocAPIs">
        {list.map((endpoint, cardIndex) => {
          const {
            id = '',
            name,
            demo = '',
            method,
            path = '',
            url,
            request = {},
            response = {}
          } = endpoint;
          return (
            <div id={id} key={cardIndex}>
              <div className="pt-3">
                <div className="mb-5">
                  <h4 className="mb-3">
                    <b>{name}</b>
                  </h4>
                  <div className="mb-3">
                    <API method={method} path={path} url={url}></API>
                  </div>
                  {demo.length > 0 && (
                    <p className="m-0">
                      <Link to={demo}>Demo</Link>
                    </p>
                  )}
                </div>
                {this.renderRequest(request, method, path)}
                {this.renderResponses(response)}
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { endpoints = {} } = this.state;
    const { header, group } = this.props;
    const list = Object.values(endpoints[group]);
    return (
      <div id="Doc" className="mt-3">
        <h2 className="mb-3">
          <b>{header}</b>
        </h2>
        {list.length > 0 && this.renderAPIs(list)}
      </div>
    );
  }
}
