'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { sports } from '../src/';

describe('sports', () => {
  it('get basketball clubs', async () => {
    const basketballClubs = await sports.getBasketballClubs();
    console.log(basketballClubs);
    assert.ok(typeof basketballClubs === 'object');
  });

  it('get football clubs', async () => {
    const footballClubs = await sports.getFootballClubs();
    console.log(footballClubs);
    assert.ok(typeof footballClubs === 'object');
  });

  it('get futsal clubs', async () => {
    const futsalClubs = await sports.getFutsalClubs();
    console.log(futsalClubs);
    assert.ok(typeof futsalClubs === 'object');
  });
});
