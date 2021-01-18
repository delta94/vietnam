import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

interface ITableProps {
  header?: string;
  loading?: boolean;
  caption?: string;
  rows?: Array<any>;
  rowConfigs?: Array<any>;
  emptyRowsText?: string;
  rowIndexEnabled?: boolean;
}

export default class Table extends Component<ITableProps> {
  render() {
    const {
      header = '',
      loading = false,
      caption = '',
      rows = [],
      rowConfigs = [],
      emptyRowsText = 'No Data',
      rowIndexEnabled = false
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
                  {rowIndexEnabled && <td>#</td>}
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
                        {rowIndexEnabled && <td>{rowIndex + 1}</td>}
                        {rowConfigs.map((config, cellIndex) => {
                          const { key, className = '' } = config;
                          let cell = '';
                          if (row[key] === 'boolean') {
                            cell = row[key].toString();
                          } else if (row[key] === 'string') {
                            cell = (row[key] || '').toString();
                          } else {
                            cell = row[key];
                          }
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