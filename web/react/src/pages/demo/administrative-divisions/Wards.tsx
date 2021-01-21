import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IWardsProps {}

interface IWardsState {
  wards: Array<any>;
  loading: boolean;
  total: number;
  active: number;
}

class Wards extends Component<IWardsProps, IWardsState> {
  constructor(props: IWardsProps) {
    super(props);

    this.state = { wards: [], loading: true, total: 0, active: 1 };

    this.getWards = this.getWards.bind(this);
    this.getTotalWards = this.getTotalWards.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.updateActive = this.updateActive.bind(this);
  }

  async componentDidMount() {
    await this.getTotalWards();
    await this.getWards();
  }

  async getWards(page: number = 0) {
    this.setState({ loading: true });
    const skip: number = page * 100;
    const wards = await apis.getWards(skip);
    this.setState({ wards, loading: false });
  }

  async getTotalWards() {
    const total: number = await apis.getTotalWards();
    this.setState({ total });
  }

  async goToPage(page: number) {
    await this.setState({ active: page });
    await this.getWards(page - 1);
  }

  async updateActive(value: number) {
    let { active } = this.state;
    active += value;
    await this.setState({ active });
    await this.getWards(active - 1);
  }

  renderPagination() {
    const { total, active } = this.state;

    if (!total) return '';

    const max: number = Math.floor(total / 100);

    const final: number = active + 10 < max ? active + 10 : max;
    const start: number = final === max ? max - 10 : active;
    const items: Array<any> = [];
    for (let page = start; page <= final; page++) {
      items.push(
        <Pagination.Item key={page} active={page === active} onClick={() => this.goToPage(page)}>
          {page}
        </Pagination.Item>
      );
    }

    return (
      <Pagination size="sm" className="justify-content-center">
        {active !== 1 && (
          <Pagination.Item key={1} onClick={() => this.goToPage(1)}>
            1
          </Pagination.Item>
        )}
        {active !== 1 && <Pagination.Prev onClick={() => this.updateActive(1)} />}
        {items}
        {final !== max && <Pagination.Next onClick={() => this.updateActive(1)} />}
        {final !== max && (
          <Pagination.Item key={max} onClick={() => this.goToPage(max)}>
            {max}
          </Pagination.Item>
        )}
      </Pagination>
    );
  }

  render() {
    const { wards, loading } = this.state;
    const rowConfigs: Array<any> = [
      { header: 'Ward', key: 'ward' },
      { header: 'District', key: 'district' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="Wards" className="container-fluid">
        {this.renderPagination()}
        <div className="mb-3">
          <Table loading={loading} caption={'Wards'} rows={wards} rowConfigs={rowConfigs}></Table>
        </div>
        {this.renderPagination()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Wards);
