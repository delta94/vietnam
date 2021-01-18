import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';

interface IWeatherCurrentProps {}

interface IWeatherCurrentState {
  result: any;
  loading: boolean;
}

export default class WeatherCurrent extends Component<IWeatherCurrentProps, IWeatherCurrentState> {
  constructor(props: IWeatherCurrentProps) {
    super(props);

    this.state = { result: {}, loading: true };

    this.getWeatherCurrent = this.getWeatherCurrent.bind(this);
  }

  async componentDidMount() {
    await this.getWeatherCurrent();
  }

  async getWeatherCurrent() {
    this.setState({ loading: true });
    const result: Array<any> = await apis.getCurrentWeather('hanoi');
    this.setState({ result, loading: false });
  }

  render() {
    const { result = {} } = this.state;

    const { main = {}, weather = [] } = result;
    const [first = {}] = weather;
    const { description = '' } = first;
    const { temp = 0, feels_like = 0, temp_min = 0, temp_max = 0 } = main;

    return (
      <div id="WeatherCurrent" className="container-fluid">
        <Card>
          <Card.Body>
            <div className="mb-3">
              <p className="m-0 text-center">{description.toUpperCase()}</p>
              <h1 className="text-center">{temp}&deg;C</h1>
              <p className="m-0 text-center">Feels Like: {feels_like}&deg;C</p>
              <p className="m-0 text-center">
                Min: {temp_min}&deg;C - Max: {temp_max}&deg;C
              </p>
            </div>
            <div className="p-3 bg-dark rounded">
              <pre className="m-0 text-white">{JSON.stringify(result, null, 2)}</pre>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
