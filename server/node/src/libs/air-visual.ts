'use strict';

import fetch from 'node-fetch';

export default class AirVisual {
  private apiKey: string = '';
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getCountries(): Promise<Array<any>> {
    const { apiKey = '' } = this;
    const url: string = `http://api.airvisual.com/v2/countries?key=${apiKey}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((res: any = {}) => {
          console.log(res);
          const { status = '', data = [] } = res;
          if (status !== 'success') return resolve([]);
          const countries = data.map(item => {
            const { country = '' } = item;
            return country;
          });
          resolve(countries);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getStates(country: string): Promise<Array<any>> {
    const { apiKey = '' } = this;
    const url: string = `http://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((res: any = {}) => {
          const { status = '', data = [] } = res;
          if (status !== 'success') return resolve([]);
          const states = data.map(item => {
            const { state } = item;
            return state;
          });
          resolve(states);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getCities(state: string, country: string): Promise<Array<any>> {
    const { apiKey = '' } = this;
    const url: string = `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((res: any = {}) => {
          const { status = '', data = [] } = res;
          if (status !== 'success') return resolve([]);
          const cities = data.map(item => {
            const { city } = item;
            return city;
          });
          resolve(cities);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  getAirVisual(city: string, state: string, country: string): Promise<any> {
    const { apiKey = '' } = this;
    const url: string = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`;
    return new Promise(resolve => {
      fetch(url)
        .then(res => res.json())
        .then((res: any = {}) => {
          const { status = '', data = {} } = res;
          if (status !== 'success') return resolve({});
          resolve(data);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }
}
