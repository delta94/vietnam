import _ from 'lodash';
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
  themeTextColor: string;
  themeSpinnerVariant: string;
  themePrimaryBackgroundColor: string;
  themeBorder: string;
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
      themeTextColor = '',
      themeSpinnerVariant = '',
      themePrimaryBackgroundColor = '',
      themeBorder = ''
    } = this.props;

    return (
      <div id="table">
        {header.length > 0 && <h5 className={`${themeTextColor}`}>{header}</h5>}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
          </div>
        )}
        {!loading && rows.length === 0 && (
          <div className="border p-3 rounded-lg">
            <b>{emptyRowsText.toUpperCase()}</b>
          </div>
        )}
        {!loading && rows.length > 0 && rowConfigs.length && (
          <div className={`table-responsive table-container rounded-lg border ${themeBorder}`}>
            <table className="table">
              {caption.length > 0 && (
                <caption className={`${themePrimaryBackgroundColor} text-center text-white`}>
                  {caption} ({rows.length})
                </caption>
              )}
              {rowConfigs.length && (
                <thead>
                  <tr>
                    {rowIndexEnabled && <th className={`${themeTextColor}`}>#</th>}
                    {rowConfigs.map((config, headerIndex) => {
                      const { header = '' } = config;
                      return (
                        <th key={headerIndex} className={`${themeTextColor}`}>
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
                        {rowIndexEnabled && <td className={`${themeTextColor}`}>{rowIndex + 1}</td>}
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
                            <td key={cellIndex} className={`${className} ${themeTextColor}`}>
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
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  const themeBorder: string = _.get(state, 'theme.border', '');
  return { themeTextColor, themeSpinnerVariant, themePrimaryBackgroundColor, themeBorder };
};

export default connect(mapStateToProps)(Table);
