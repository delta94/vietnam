import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IFinanceCompaniesProps {}

interface IFinanceCompaniesState {
  companies: Array<any>;
  loading: boolean;
}

export default class FinanceCompanies extends Component<
  IFinanceCompaniesProps,
  IFinanceCompaniesState
> {
  constructor(props: IFinanceCompaniesProps) {
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
      <div id="FinanceCompanies" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Companies'}
              rows={companies}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
