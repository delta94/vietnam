'use strict';

import * as dotenv from 'dotenv';
dotenv.config({ path: '../../environments/dev.env' });

import { airVisual } from '../../libs';

const main = async () => {
  const countries = await airVisual.getCountries();
  console.log(countries);

  const country: string = 'Vietnam';

  const states = await airVisual.getStates('Vietnam');
  console.log(states);

  let cities = [];
  for (const state of states) {
    const _cities = await airVisual.getCities(state, country);
    cities = cities.concat(
      _cities.map((city: string) => {
        return { city, state, country };
      })
    );
  }

  console.log(cities);
};

main().catch(error => console.error(error));
