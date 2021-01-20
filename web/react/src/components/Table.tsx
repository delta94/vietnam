import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

interface ITableProps {
  header?: string;
  loading?: boolean;
  caption?: string;
  rows?: Array<any>;
  rowConfigs?: Array<any>;
  emptyRowsText?: string;
  rowIndexEnabled?: boolean;
  theme: string;
}

class Table extends Component<ITableProps> {
  render() {
    const {
      header = '',
      loading = false,
      caption = '',
      rows = [],
      rowConfigs = [],
      emptyRowsText = 'No Data',
      rowIndexEnabled = false,
      theme
    } = this.props;
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';
    const spinnerVariant: string = theme === 'light' ? 'danger' : 'light';
    const borderColor: string = theme === 'light' ? '' : 'border-white';
    const bgColor: string = theme === 'light' ? 'bg-danger' : 'bg-black';

    return (
      <div id="table">
        {header.length > 0 && <h5 className={`${textColor}`}>{header}</h5>}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={spinnerVariant}></Spinner>
          </div>
        )}
        {!loading && rows.length === 0 && (
          <div className="border p-3 rounded-lg">
            <b>{emptyRowsText.toUpperCase()}</b>
          </div>
        )}
        {!loading && rows.length > 0 && rowConfigs.length && (
          <div className={`table-responsive table-container rounded-lg border ${borderColor}`}>
            <table className="table">
              {caption.length > 0 && (
                <caption className={`${bgColor} text-center text-white`}>
                  {caption} ({rows.length})
                </caption>
              )}
              {rowConfigs.length && (
                <thead>
                  <tr>
                    {rowIndexEnabled && <th className={`${textColor}`}>#</th>}
                    {rowConfigs.map((config, headerIndex) => {
                      const { header = '' } = config;
                      return (
                        <th key={headerIndex} className={`${textColor}`}>
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
              )}
              {rows.length && (
                <tbody>
                  {rows.map((row, rowIndex) => {
                    return (
                      <tr key={rowIndex}>
                        {rowIndexEnabled && <td className={`${textColor}`}>{rowIndex + 1}</td>}
                        {rowConfigs.map((config, cellIndex) => {
                          const { key, className = '' } = config;
                          let cell = '';
                          if (typeof row[key] === 'boolean') {
                            cell = row[key].toString();
                          } else if (typeof row[key] === 'string') {
                            cell = (row[key] || '').toString();
                          } else {
                            cell = row[key];
                          }
                          return (
                            <td key={cellIndex} className={`${className} ${textColor}`}>
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

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

export default connect(mapStateToProps)(Table);
