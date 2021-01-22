import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import { NavPills } from '../../../components';
import { apis } from '../../../services';

interface ICurrentProps {}

interface ICurrentState {
  result: any;
  loading: boolean;
}

class Current extends Component<ICurrentProps, ICurrentState> {
  constructor(props: ICurrentProps) {
    super(props);

    this.state = { result: {}, loading: true };

    this.getCurrent = this.getCurrent.bind(this);
  }

  async componentDidMount() {
    await this.getCurrent();
  }

  async getCurrent() {
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
      <div id="Current" className="container-fluid">
        <NavPills group={'weather'}></NavPills>
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

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Current);
