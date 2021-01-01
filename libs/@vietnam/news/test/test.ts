'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import news from '../src/';

describe('news', () => {
  it('get categories', async () => {
    const categories = news.getCategories();
    console.log(JSON.stringify(categories, null, 2));
    assert.ok(typeof categories === 'object');
  });

  it('get sources', async () => {
    const sources = news.getSources();
    console.log(JSON.stringify(sources, null, 2));
    assert.ok(typeof sources === 'object');
  });

  it('get google trends', async () => {
    const trends = await news.getGoogleTrends();
    console.log(trends.length, JSON.stringify(trends, null, 2));
    assert.ok(typeof trends === 'object');
  });

  it('get articles', async () => {
    const articles = await news.getNews();
    console.log(JSON.stringify(articles, null, 2));
    assert.ok(typeof articles === 'object');
  });
});
