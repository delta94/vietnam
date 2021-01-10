import React, { Component } from 'react';

import { capitalize } from '../../helper';
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
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id: string) {
    const targetID = `#${id}`;
    console.log(targetID);
    // const top: number = $(targetID).offset().top;
    // console.log(targetID, top);
    // $('#DocsMain').animate({ scrollTo: top }, 1500);
  }

  renderTable(apis: Array<any>) {
    const colors: any = { get: 'text-success', post: 'text-info' };
    return (
      apis.length > 0 && (
        <table>
          <tbody>
            {apis.map((api, index) => {
              const { id, method, name } = api;
              const color = colors[method.toLowerCase()];
              return (
                <tr onClick={() => this.scrollTo(id)} key={index} className="cursor-pointer">
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
      )
    );
  }

  renderSidebar(endpoints: any) {
    const groups: Array<string> = Object.keys(endpoints);
    const list = groups.map((group: string) => {
      const apis = Object.values(endpoints[group]);
      return { group, apis };
    });

    console.log(list);
    return (
      <div id="DocSidebar">
        {list.length > 0 &&
          list.map((item, index) => {
            const { group, apis } = item;
            const header = capitalize(group);
            return (
              <div key={index}>
                <p className="m-0">{header}</p>
                {this.renderTable(apis)}
              </div>
            );
          })}
      </div>
    );
  }

  render() {
    const { endpoints = {} } = this.state;
    const groups: Array<string> = Object.keys(endpoints);

    return (
      <div id="Docs" className="container">
        {/* <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="h-80vh overflow-auto">{this.renderSidebar(endpoints)}</div>
          </div>
          <div className="col-md-9">
            <div id="DocsMain" className="h-80vh overflow-auto">
              
            </div>
          </div>
        </div> */}
        {groups.length > 0 &&
          groups.map((group: string, index: number) => {
            return <Doc key={index} group={group} header={capitalize(group)}></Doc>;
          })}
      </div>
    );
  }
}
