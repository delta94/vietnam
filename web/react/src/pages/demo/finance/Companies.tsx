import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface ICompaniesProps {}

interface ICompaniesState {
  companies: Array<any>;
  loading: boolean;
}

class Companies extends Component<ICompaniesProps, ICompaniesState> {
  constructor(props: ICompaniesProps) {
    super(props);

    this.state = { companies: [], loading: false };

    this.getStockCompanies = this.getStockCompanies.bind(this);
  }

  async componentDidMount() {
    await this.getStockCompanies();
  }

  async getStockCompanies() {
    this.setState({ loading: true });
    const companies = await apis.getStockCompanies();
    this.setState({ companies, loading: false });
  }

  render() {
    const { companies = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Symbol', key: 'symbol' },
      { header: 'Name', key: 'name' },
      { header: 'Group', key: 'group' },
      { header: 'Industry', key: 'industry' },
      { header: 'Sub Sector', key: 'subsector' },
      { header: 'Basic P/E', key: 'basicPE' },
      { header: 'Diluted P/E', key: 'dilutedPE' },
      { header: 'P/B', key: 'PB' },
      { header: 'P/S', key: 'PS' }
    ];
    return (
      <div id="Companies" className="container-fluid">
        <Table
          loading={loading}
          caption={'Companies'}
          rows={companies}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Companies);
