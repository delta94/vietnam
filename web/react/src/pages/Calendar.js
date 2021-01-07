import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { months } from '../configs';
import { addZero, capitalize } from '../helper';
import { apis } from '../services';

import { Code } from '../components';

class Calendar extends Component {
  constructor() {
    super();

    this.state = { solarDate: '', solarString: '', lunarDate: '', lunarString: '' };

    this.updateSolarDate = this.updateSolarDate.bind(this);
    this.buildSolarString = this.buildSolarString.bind(this);
    this.updateLunarDate = this.updateLunarDate.bind(this);
    this.buildLunarString = this.buildLunarString.bind(this);
  }

  async componentDidMount() {
    const d = new Date();
    const year = d.getFullYear();
    const month = addZero(d.getMonth() + 1);
    const date = addZero(d.getDate());
    const solarDate = `${year}-${month}-${date}`;
    const solarString = this.buildSolarString(year, month, date);
    console.log({ solarDate, solarString });
    await this.setState({ solarDate, solarString });

    const { year: yyyy, month: mm, date: dd } = await apis.convertSolarToLunar({
      year,
      month,
      date
    });
    const lunarDate = `${yyyy}-${addZero(mm)}-${addZero(dd)}`;
    const lunarString = await this.buildLunarString(yyyy, mm, dd);
    console.log({ lunarDate, lunarString });
    this.setState({ lunarDate, lunarString });
  }

  buildSolarString(year, month, date) {
    return `${capitalize(months[month - 1].name)} ${date}, ${year}`;
  }

  async buildLunarString(year, month, date) {
    return await apis.getCanChi({ year, month, date });
  }

  async updateSolarDate(event) {
    const { value: solarDate } = event.target;
    const [year, month, date] = solarDate.split('-');
    const solarString = this.buildSolarString(year, parseInt(month, 10), date);
    console.log({ solarDate, solarString });
    await this.setState({ solarDate, solarString });
    const { year: yyyy, month: mm, date: dd } = await apis.convertSolarToLunar({
      year,
      month,
      date
    });
    const lunarDate = `${yyyy}-${addZero(mm)}-${addZero(dd)}`;
    const lunarString = await this.buildLunarString(yyyy, mm, dd);
    console.log({ lunarDate, lunarString });
    this.setState({ lunarDate, lunarString });
  }

  async updateLunarDate(event) {
    const { value: lunarDate } = event.target;
    const [year, month, date] = lunarDate.split('-');
    const lunarString = await this.buildLunarString(year, month, date);
    console.log({ lunarDate, lunarString });
    await this.setState({ lunarDate, lunarString });
    const { year: yyyy, month: mm, date: dd } = await apis.convertLunarToSolar({
      year,
      month,
      date
    });
    const solarDate = `${yyyy}-${addZero(mm)}-${addZero(dd)}`;
    const solarString = this.buildSolarString(yyyy, mm, dd);
    console.log({ solarDate, solarString });
    this.setState({ solarDate, solarString });
  }

  render() {
    const { solarDate = '', solarString = '', lunarDate = '', lunarString = '' } = this.state;

    return (
      <div id="Calendar">
        <main className="container mt-3">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Calendar</Card.Title>
              <Form>
                <Form.Group controlId="SolarDate">
                  <Code method={'POST'} url={`calendar/solar2lunar`}></Code>
                  <Form.Label>Solar Date: {solarString}</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Solar Date"
                    pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                    value={solarDate}
                    onChange={this.updateSolarDate}
                  />
                </Form.Group>
                <hr></hr>
                <Form.Group controlId="LunarDate">
                  <Code method={'POST'} url={`calendar/lunar2solar`}></Code>
                  <Form.Label>Lunar Date: {lunarString}</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Lunar Date"
                    pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])/(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])/(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                    value={lunarDate}
                    onChange={this.updateLunarDate}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </main>
      </div>
    );
  }
}

export default Calendar;
