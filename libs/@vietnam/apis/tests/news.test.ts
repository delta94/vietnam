'use strict';

import * as assert from 'assert';
import { describe, it } from 'mocha';

import { news } from '../src/';

describe('news', () => {
  it('get trends', async () => {
    const trends = await news.getGoogleTrends();
    console.log(trends);
    assert.ok(typeof trends === 'object');
  });

  it('get sources', async () => {
    const sources: Array<string> = await news.getSources();
    console.log(sources);
    assert.ok(typeof sources === 'object');
  });

  it('get categories', async () => {
    const source: string = 'vnexpress';
    const categories: Array<string> = await news.getCategories(source);
    console.log(categories);
    assert.ok(typeof categories === 'object');
  });

  it('get articles', async () => {
    const source: string = 'vnexpress';
    const category: string = 'general';
    const articles: Array<any> = await news.getArticles(source, category);
    console.log(articles);
    assert.ok(typeof articles === 'object');
  });
});
