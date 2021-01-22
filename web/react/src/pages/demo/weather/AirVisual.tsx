import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Spinner } from 'react-bootstrap';

import { NavPills } from '../../../components';
import { apis } from '../../../services';

interface IAirVisualProps {
  themeInput: string;
  themeSpinnerVariant: string;
}

interface IAirVisualState {
  city: string;
  cities: Array<any>;
  airVisual: any;
  loading: boolean;
}

class AirVisual extends Component<IAirVisualProps, IAirVisualState> {
  constructor(props: IAirVisualProps) {
    super(props);

    this.state = {
      city: '',
      cities: [],
      airVisual: {},
      loading: true
    };

    this.getAirVisual = this.getAirVisual.bind(this);
    this.getAirVisualCities = this.getAirVisualCities.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  async componentDidMount() {
    await this.getAirVisualCities();
    await this.getAirVisual();
  }

  async getAirVisualCities() {
    const cities: Array<any> = await apis.getAirVisualCities();

    this.setState({ cities });
  }

  async getAirVisual(query?: string) {
    const { city: fallbackCity = '' } = this.state;
    const city = query || fallbackCity;
    this.setState({ loading: true });
    const airVisual: Array<any> = await apis.getAirVisual(city);
    this.setState({ airVisual, loading: false });
  }

  async updateCity(event: any) {
    const { value: city } = event.target;
    await this.setState({ city });
    await this.getAirVisual(city);
  }

  renderForm() {
    const { city = '', cities = [] } = this.state;
    const { themeInput = '' } = this.props;
    return (
      <Form>
        <Form.Group>
          <Form.Control as="select" className={themeInput} value={city} onChange={this.updateCity}>
            <option value={''}>City</option>
            {cities.map((item: any, index) => {
              return (
                <option key={index} value={item.city}>
                  {item.city || ''} - {item.state || ''}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }

  render() {
    const { airVisual = {}, loading = true } = this.state;
    const { themeSpinnerVariant = '' } = this.props;
    const aqius: number = _.get(airVisual, 'current.pollution.aqius', 0);
    console.log(airVisual);
    return (
      <div id="YouTubeTrending" className="container-fluid">
        <NavPills group={'weather'}></NavPills>
        {this.renderForm()}
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
          </div>
        )}
        {!loading && (
          <Card>
            <Card.Body>
              <Card.Text className="text-center">{aqius}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  return { themeInput, themeSpinnerVariant };
};

export default connect(mapStateToProps)(AirVisual);
