import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

export default class Table extends Component {
  render() {
    const {
      header = '',
      loading = false,
      caption = '',
      rows = [],
      rowConfigs = [],
      emptyRowsText = 'No Data'
    } = this.props;

    return (
      <div id="table">
        {header.length > 0 && <h5>{header}</h5>}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && rows.length === 0 && (
          <div className="border p-3 rounded-lg">
            <b>{emptyRowsText.toUpperCase()}</b>
          </div>
        )}
        {!loading && rows.length > 0 && rowConfigs.length && (
          <div className="table-responsive table-container rounded-lg">
            <table className="table">
              {caption.length > 0 && (
                <caption className="text-center bg-danger text-white">
                  {caption} ({rows.length})
                </caption>
              )}
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
                          const { key, className = '' } = config;
                          const cell =
                            typeof row[key] === 'boolean'
                              ? row[key].toString()
                              : (row[key] || '').toString();
                          return (
                            <td key={cellIndex} className={className}>
                              {cell}
                            </td>
                          );
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
