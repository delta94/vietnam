import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IMapsDistrictsProps {}

interface IMapsDistrictsState {
  provinces: Array<any>;
  province_id: string;
  districts: Array<any>;
  loading: boolean;
}

export default class MapsDistricts extends Component<IMapsDistrictsProps, IMapsDistrictsState> {
  constructor(props: IMapsDistrictsProps) {
    super(props);

    this.state = { provinces: [], province_id: '', districts: [], loading: true };

    this.getMapsProvinces = this.getMapsProvinces.bind(this);
    this.getMapsDistricts = this.getMapsDistricts.bind(this);
    this.updateProvince = this.updateProvince.bind(this);
  }

  async componentDidMount() {
    await this.getMapsProvinces();
    const { provinces } = this.state;
    const [province = {}] = provinces;
    const { province_id } = province;
    await this.setState({ province_id });
    await this.getMapsDistricts();
  }

  async getMapsProvinces() {
    const provinces = await apis.getMapsProvinces();
    await this.setState({ provinces });
  }

  async getMapsDistricts() {
    const { province_id } = this.state;
    await this.setState({ loading: true });
    const districts = await apis.getMapsDistricts(province_id);
    await this.setState({ districts, loading: false });
  }

  async updateProvince(event: any) {
    const { value: province_id } = event.target;
    await this.setState({ province_id });
    await this.getMapsDistricts();
  }

  render() {
    const { provinces = [], districts = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Level', key: 'level' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="MapsDistricts" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="ha-noi"
                  value={this.state.province_id}
                  onChange={this.updateProvince}>
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
            <Table
              loading={loading}
              caption={'Districts'}
              rows={districts}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
