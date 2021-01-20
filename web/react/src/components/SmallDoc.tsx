import React, { Component } from 'react';
import { connect } from 'react-redux';

import Doc from './Doc';
import { endpoints } from '../configs';

interface ISmallDocProps {
  group: string;
  header: string;
  theme: string;
}

interface ISmallDocState {
  endpoints: any;
}

class SmallDoc extends Component<ISmallDocProps, ISmallDocState> {
  constructor(props: ISmallDocProps) {
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
    const { theme } = this.props;
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';
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
                      <small className={`${textColor}`}>{name}</small>
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
    const { group, header, theme } = this.props;
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';
    const apis = Object.values(endpoints[group]).filter((api: any) => api.public);
    return (
      <div>
        <h6>
          <b className={`${textColor}`}>{header}</b>
        </h6>
        {this.renderTable(apis)}
      </div>
    );
  }

  render() {
    const { endpoints } = this.state;
    const { group, header } = this.props;
    return (
      <div id="SmallDoc">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="content-height overflow-auto">{this.renderSidebar(endpoints)}</div>
          </div>
          <div className="col-md-9">
            <div className="content-height overflow-auto">
              <Doc group={group} header={header}></Doc>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

export default connect(mapStateToProps)(SmallDoc);
