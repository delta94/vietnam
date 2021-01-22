import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IDistrictsProps {
  themeInput: string;
}

interface IDistrictsState {
  provinces: Array<any>;
  province_id: string;
  districts: Array<any>;
  loading: boolean;
}

class Districts extends Component<IDistrictsProps, IDistrictsState> {
  constructor(props: IDistrictsProps) {
    super(props);

    this.state = { provinces: [], province_id: '', districts: [], loading: true };

    this.getProvinces = this.getProvinces.bind(this);
    this.getDistricts = this.getDistricts.bind(this);
    this.updateProvince = this.updateProvince.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    await this.getProvinces();
    const { provinces } = this.state;
    const [province = {}] = provinces;
    const { province_id } = province;
    await this.setState({ province_id });
    await this.getDistricts();
  }

  async getProvinces() {
    const provinces = await apis.getProvinces();
    await this.setState({ provinces });
  }

  async getDistricts() {
    const { province_id } = this.state;
    await this.setState({ loading: true });
    const districts = await apis.getDistricts(province_id);
    await this.setState({ districts, loading: false });
  }

  async updateProvince(event: any) {
    const { value: province_id } = event.target;
    await this.setState({ province_id });
    await this.getDistricts();
  }

  renderForm() {
    const { provinces = [], province_id = '' } = this.state;
    const { themeInput = '' } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Control
            as="select"
            className={themeInput}
            value={province_id}
            onChange={this.updateProvince}>
            <option value={''}>Province</option>
            {provinces.map((province, index) => {
              return (
                <option key={index} value={province.province_id}>
                  {province.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  render() {
    const { districts = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Level', key: 'level' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="Districts" className="container-fluid">
        <NavPills group={'administrative-divisions'}></NavPills>
        {this.renderForm()}
        <Table
          loading={loading}
          caption={'Districts'}
          rows={districts}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  return { themeInput };
};

export default connect(mapStateToProps)(Districts);
