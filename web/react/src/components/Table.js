import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

export default class Table extends Component {
  render() {
    const { loading = true, caption = '', rows = [], rowConfigs = [] } = this.props;

    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && rows.length && rowConfigs.length && (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-center bg-danger text-white">
                {caption} ({rows.length})
              </caption>
              {rowConfigs.length && (
                <thead>
                  <tr>
                    {rowConfigs.map((config, headerIndex) => {
                      const { header = '' } = config;
                      return <th key={headerIndex}>{header}</th>;
                    })}
                  </tr>
                </thead>
              )}
              {rows.length && (
                <tbody>
                  {rows.map((row, rowIndex) => {
                    return (
                      <tr key={rowIndex}>
                        {rowConfigs.map((config, cellIndex) => {
                          const { key } = config;
                          return <td key={cellIndex}>{(row[key] || '').toString()}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        )}
      </div>
    );
  }
}
