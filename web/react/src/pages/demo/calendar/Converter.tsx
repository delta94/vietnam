import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { months } from '../../../configs';
import { apis, helper } from '../../../services';

interface IConverterProps {
  themeInput: string;
  themeTextColor: string;
}

interface IConverterState {
  solarDate: string;
  solarString: string;
  lunarDate: string;
  lunarString: string;
}

class Converter extends Component<IConverterProps, IConverterState> {
  private loadingText: string = 'LOADING ...';

  constructor(props: IConverterProps) {
    super(props);

    this.state = {
      solarDate: '',
      solarString: this.loadingText,
      lunarDate: '',
      lunarString: this.loadingText
    };

    this.updateSolarDate = this.updateSolarDate.bind(this);
    this.buildSolarString = this.buildSolarString.bind(this);
    this.updateLunarDate = this.updateLunarDate.bind(this);
    this.buildLunarString = this.buildLunarString.bind(this);
  }

  async componentDidMount() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const monthString = helper.addZero(month);
    const date = d.getDate();
    const dateString = helper.addZero(date);
    const solarDate = `${year}-${monthString}-${dateString}`;
    const solarString = this.buildSolarString(year, month, date);

    await this.setState({ solarDate, solarString });

    const { year: yyyy, month: mm, date: dd } = await apis.convertSolarToLunar(year, month, date);
    const lunarDate = `${yyyy}-${helper.addZero(mm)}-${helper.addZero(dd)}`;
    const lunarString = await this.buildLunarString(yyyy, mm, dd);

    await this.setState({ lunarDate, lunarString });
  }

  buildSolarString(year: number, month: number, date: number) {
    return `${helper.capitalize(months[month - 1].name)} ${date}, ${year}`;
  }

  async buildLunarString(year: number, month: number, date: number) {
    const canChi: string = await apis.getCanChi(year, month, date);
    return helper.capitalize(canChi);
  }

  async updateSolarDate(event: any) {
    const { value: solarDate } = event.target;
    const [year, month, date] = solarDate.split('-');
    const solarString = this.buildSolarString(year, parseInt(month, 10), date);

    await this.setState({ solarDate, solarString, lunarString: this.loadingText });
    const { year: yyyy, month: mm, date: dd } = await apis.convertSolarToLunar(year, month, date);
    const lunarDate = `${yyyy}-${helper.addZero(mm)}-${helper.addZero(dd)}`;
    const lunarString = await this.buildLunarString(yyyy, mm, dd);

    this.setState({ lunarDate, lunarString });
  }

  async updateLunarDate(event: any) {
    const { value: lunarDate } = event.target;
    const [year, month, date] = lunarDate.split('-');
    const lunarString = await this.buildLunarString(year, month, date);

    await this.setState({ lunarDate, lunarString, solarString: this.loadingText });
    const { year: yyyy, month: mm, date: dd } = await apis.convertLunarToSolar(year, month, date);
    const solarDate = `${yyyy}-${helper.addZero(mm)}-${helper.addZero(dd)}`;
    const solarString = this.buildSolarString(yyyy, mm, dd);

    this.setState({ solarDate, solarString });
  }

  render() {
    const { solarDate = '', solarString = '', lunarDate = '', lunarString = '' } = this.state;
    const { themeInput = '', themeTextColor = '' } = this.props;

    return (
      <div id="Converter" className="container-fluid">
        <h3 className={`${themeTextColor} text-center`}>Calendar</h3>
        <Form className="row">
          <div className="col-sm-6">
            <Form.Group controlId="SolarDate">
              <Form.Label className={themeTextColor}>Solar Date: {solarString}</Form.Label>
              <Form.Control
                type="date"
                placeholder="Solar Date"
                pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                className={`${themeInput}`}
                value={solarDate}
                onChange={this.updateSolarDate}
              />
            </Form.Group>
          </div>
          <div className="col-sm-6">
            <Form.Group controlId="LunarDate">
              <Form.Label className={themeTextColor}>Lunar Date: {lunarString}</Form.Label>
              <Form.Control
                type="date"
                placeholder="Lunar Date"
                pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                className={`${themeInput}`}
                value={lunarDate}
                onChange={this.updateLunarDate}
              />
            </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  return { themeInput, themeTextColor };
};

export default connect(mapStateToProps)(Converter);
