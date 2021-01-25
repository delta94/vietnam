import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis, helper } from '../../../services';

interface ICongressProps {
  themeInput: string;
}

interface ICongressState {
  chamber: string;
  congress: Array<any>;
  loading: boolean;
}

class Congress extends Component<ICongressProps, ICongressState> {
  constructor(props: ICongressProps) {
    super(props);

    this.state = { congress: [], chamber: 'house', loading: true };

    this.renderForm = this.renderForm.bind(this);
    this.getCongress = this.getCongress.bind(this);
    this.updateChamber = this.updateChamber.bind(this);
  }

  async componentDidMount() {
    await this.getCongress();
  }

  async getCongress() {
    this.setState({ loading: true });
    const { chamber } = this.state;
    const congress: Array<any> = await apis.getCongress(chamber);
    this.setState({ congress, loading: false });
  }

  async updateChamber(event: any) {
    const { value: chamber } = event.target;
    await this.setState({ chamber });
    await this.getCongress();
  }

  renderForm() {
    const { chamber } = this.state;
    const { themeInput } = this.props;

    const options = [
      { value: 'house', text: 'House' },
      { value: 'senate', text: 'Senate' }
    ];
    return (
      <Form>
        <Form.Group>
          <Form.Control
            as="select"
            className={themeInput}
            value={chamber}
            onChange={this.updateChamber}>
            <option value={''}>Chamber</option>
            {options.map((option, index) => {
              const { text, value } = option;
              return (
                <option key={index} value={value}>
                  {text}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  render() {
    const { congress = [], chamber = '', loading = false } = this.state;

    const members: Array<any> = congress
      .filter(member => member.in_office)
      .map(member => {
        const { first_name, last_name, gender, party, seniority, state, title } = member;
        const name: string = `${first_name} ${last_name}`;
        return { name, gender, party, seniority, state, title };
      })
      .sort((a, b) => (a.state > b.state ? 1 : -1));

    const rowConfigs = [
      { header: 'Title', key: 'title' },
      { header: 'Name', key: 'name' },
      { header: 'State', key: 'state' },
      { header: 'Party', key: 'party' },
      { header: 'Gender', key: 'gender' },
      { header: 'Seniority', key: 'seniority' }
    ];

    const caption = helper.capitalize(chamber);
    return (
      <div id="Congress" className="container-fluid">
        {this.renderForm()}
        <Table loading={loading} caption={caption} rows={members} rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  return { themeInput };
};

export default connect(mapStateToProps)(Congress);
