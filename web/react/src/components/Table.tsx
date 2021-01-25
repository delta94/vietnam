import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

interface IRowConfig {
  header: string;
  key: string;
  className?: string;
  seperator?: string;
  type?: string;
}

interface ITableProps {
  header?: string;
  loading?: boolean;
  caption?: string;
  rows?: Array<any>;
  rowConfigs?: Array<IRowConfig>;
  emptyRowsText?: string;
  rowIndexEnabled?: boolean;
  themeTextColor: string;
  themeSpinnerVariant: string;
  themePrimaryBackgroundColor: string;
  themeBorder: string;
}

interface ITableState {
  sortBy: string;
  sortDir: number;
}

class Table extends Component<ITableProps, ITableState> {
  constructor(props: ITableProps) {
    super(props);

    this.state = { sortBy: '', sortDir: 1 };

    this.renderCell = this.renderCell.bind(this);
    this.sort = this.sort.bind(this);
  }

  async sort(by: string) {
    const { sortDir = 1, sortBy = '' } = this.state;
    const { rows = [] } = this.props;
    const dir = sortDir * (by === sortBy ? -1 : 1);
    await this.setState({ sortBy: by, sortDir: dir });
    rows.sort((a, b) => dir * (a[by] > b[by] ? 1 : -1));
  }

  renderCell(row: any, config: any, index: number) {
    const { themeTextColor } = this.props;
    const { key, className = '', type = 'text', seperator = ' - ' } = config;
    const { url = '' } = row;
    let value: any = '';
    if (typeof row[key] === 'boolean') {
      value = row[key].toString();
    } else if (typeof row[key] === 'string') {
      value = (row[key] || '').toString();
    } else {
      value = row[key];
    }
    let cell: any = '';
    switch (type) {
      case 'text':
        cell = value;
        break;
      case 'link':
        cell = (
          <a href={url} target="_blank" rel="noreferrer" className={themeTextColor}>
            <u>{value}</u>
          </a>
        );
        break;
      case 'npm':
        cell = (
          <a
            href={`https://www.npmjs.com/package/${value}`}
            target="_blank"
            rel="noreferrer"
            className={themeTextColor}>
            <u>npm</u>
          </a>
        );
        break;
      case 'list':
        cell = value.join(seperator);
        break;
      default:
        cell = value;
        break;
    }
    return (
      <td key={index} className={`${className} ${themeTextColor}`}>
        {cell}
      </td>
    );
  }

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
          <div className={`border p-3 rounded-lg ${themeTextColor}`}>
            <b>{emptyRowsText.toUpperCase()}</b>
          </div>
        )}
        {!loading && rows.length > 0 && rowConfigs.length > 0 && (
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
                          return this.renderCell(row, config, cellIndex);
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
