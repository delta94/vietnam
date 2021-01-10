import React, { Component } from 'react';
import { Accordion, Button } from 'react-bootstrap';

import { helper } from '../../services';
import { endpoints, IEndpoints } from '../../configs';
import { Doc } from '../../components';

interface IDocsProps {}

interface IDocsState {
  endpoints: IEndpoints;
}

export default class Docs extends Component<IDocsProps, IDocsState> {
  constructor(props: IDocsProps) {
    super(props);

    this.state = { endpoints };

    this.renderSidebar = this.renderSidebar.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }

  scrollIntoView(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderTable(apis: Array<any>) {
    const colors: any = { get: 'text-success', post: 'text-info' };
    return (
      <div>
        {apis.length > 0 && (
          <table>
            <tbody>
              {apis.map((api, index) => {
                const { id, method, name } = api;
                const color = colors[method.toLowerCase()];
                return (
                  <tr
                    onClick={() => this.scrollIntoView(id)}
                    key={index}
                    className="cursor-pointer">
                    <td className="pt-1 pb-1 pr-3">
                      <small className={color}>
                        <b>{method}</b>
                      </small>
                    </td>
                    <td>
                      <small>{name}</small>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  renderSidebar(endpoints: any) {
    const groups: Array<string> = Object.keys(endpoints);
    const list = groups.map((group: string) => {
      const apis = Object.values(endpoints[group]).filter((api: any) => api.public);
      return { group, apis };
    });

    return (
      <Accordion defaultActiveKey="0">
        {list.length > 0 &&
          list.map((item, index: number) => {
            const { group, apis } = item;
            const header = helper.capitalize(group);
            return (
              <div key={index}>
                <Accordion.Toggle
                  className="m-0 p-0 text-dark"
                  as={Button}
                  variant="link"
                  eventKey={index.toString()}>
                  {header}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  {this.renderTable(apis)}
                </Accordion.Collapse>
              </div>
            );
          })}
      </Accordion>
    );
  }

  render() {
    const { endpoints = {} } = this.state;
    const groups: Array<string> = Object.keys(endpoints);

    return (
      <div id="Docs" className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="h-80vh overflow-auto">{this.renderSidebar(endpoints)}</div>
          </div>
          <div className="col-md-9">
            <div className="h-80vh overflow-auto">
              {groups.length > 0 &&
                groups.map((group: string, index: number) => {
                  return <Doc key={index} group={group} header={helper.capitalize(group)}></Doc>;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
