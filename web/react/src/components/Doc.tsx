import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';

import { endpoints } from '../configs';

import API from './API';
import CURL from './CURL';
import Table from './Table';

interface IDocProps {
  header?: string;
  group: any;
  themeTextColor: string;
}

interface IDocState {
  endpoints: any;
}
class Doc extends Component<IDocProps, IDocState> {
  constructor(props: IDocProps) {
    super(props);

    this.state = { endpoints };

    this.renderAPIs = this.renderAPIs.bind(this);
    this.renderRequest = this.renderRequest.bind(this);
    this.renderResponses = this.renderResponses.bind(this);
    this.buildResponseExample = this.buildResponseExample.bind(this);
  }

  renderRequest(request: any, method: string, path: string) {
    const { themeTextColor = '' } = this.props;
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
          <p className={`${themeTextColor}`}>Request Example</p>
          <CURL method={method} path={path} headers={headers} body={body} query={query}></CURL>
        </div>
      </div>
    );
  }

  buildResponseExample(example: any = {}): string {
    return JSON.stringify(example, null, 2).replace(/"</g, '<').replace(/>"/g, '>');
  }

  renderResponses(response: any) {
    const { themeTextColor = '' } = this.props;
    const responseRowConfigs = [
      { header: 'Name', key: 'name', className: 'font-weight-bold' },
      { header: 'Type', key: 'type' },
      { header: 'Description', key: 'description' }
    ];
    const responseCodes = Object.keys(response);
    return (
      <div id="DocResponses" className="mb-5">
        <h5 className={`${themeTextColor}`}>Responses</h5>
        {responseCodes.length > 0 && (
          <Tabs defaultActiveKey="200" id="responses-tabs">
            {responseCodes.map((code, index) => {
              const { schema, example } = response[code] || {};
              return (
                <Tab key={index} eventKey={code} title={code} className="border-0">
                  <div className="mt-3">
                    <div className="mb-3">
                      <Table loading={false} rows={schema} rowConfigs={responseRowConfigs}></Table>
                    </div>
                    <p className={`${themeTextColor}`}>Response Example</p>
                    <div className="p-3 bg-dark text-white rounded-lg">
                      <pre className="m-0 text-yellow">{this.buildResponseExample(example)}</pre>
                    </div>
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
    const { themeTextColor = '' } = this.props;
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
                  <h4 className={`${themeTextColor} mb-3`}>{name}</h4>
                  <div className="mb-3">
                    <API method={method} path={path} url={url}></API>
                  </div>
                  {demo.length > 0 && (
                    <p className="m-0">
                      <Link to={demo} className={themeTextColor}>
                        <u>Demo</u>
                      </Link>
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
    const { header, group, themeTextColor } = this.props;
    const list = Object.values(endpoints[group]);
    return (
      <div id="Doc">
        <h2 className={`${themeTextColor} mb-3`}>{header}</h2>
        {list.length > 0 && this.renderAPIs(list)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  return { themeTextColor };
};

export default connect(mapStateToProps)(Doc);
