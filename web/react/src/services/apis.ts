import { endpoints, IEndpoint } from '../configs';

interface IRequest {
  query: any;
  body: any;
}

export default class APIS {
  private buildQueryString(query: any = {}) {
    const keys = Object.keys(query);
    if (!keys.length) return '';
    return keys.map(key => `${key}=${(query[key] || '').toString()}`).join('&');
  }

  private fetch(endpoint: IEndpoint, request: IRequest = { query: {}, body: {} }): Promise<any> {
    const { query = {}, body = {} } = request;
    const { url, method } = endpoint;
    const queryString = this.buildQueryString(query);
    const input = queryString ? `${url}?${queryString}` : url;
    const options =
      method === 'GET'
        ? { method, headers: { 'Content-Type': 'application/json' } }
        : { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
    return new Promise(resolve => {
      fetch(input, options)
        .then(res => res.json())
        .then((res = {}) => {
          resolve(res);
        })
        .catch(error => {
          console.error(error);
          resolve([]);
        });
    });
  }

  public async getGeneralSecretaries() {
    const endpoint: IEndpoint = endpoints.government.getGeneralSecretaries;
    return await this.fetch(endpoint);
  }

  public async getPresidents() {
    const endpoint: IEndpoint = endpoints.government.getPresidents;
    return await this.fetch(endpoint);
  }

  public async getPrimeMinisters() {
    const endpoint: IEndpoint = endpoints.government.getPrimeMinisters;
    return await this.fetch(endpoint);
  }

  public async getNationalAssemblyChairs() {
    const endpoint: IEndpoint = endpoints.government.getNationalAssemblyChairs;
    return await this.fetch(endpoint);
  }

  public async getNationalAssemblyMembers(no: number) {
    const endpoint: IEndpoint = endpoints.government.getNationalAssemblyMembers;
    return await this.fetch(endpoint, { query: { no }, body: {} });
  }

  public async getMinistries() {
    const endpoint: IEndpoint = endpoints.government.getMinistries;
    return await this.fetch(endpoint);
  }

  public async getMinisters(ministry: string) {
    const endpoint: IEndpoint = endpoints.government.getMinisters;
    return await this.fetch(endpoint, { query: { ministry }, body: {} });
  }

  public async getGoogleTrends() {
    const endpoint: IEndpoint = endpoints.news.getTrends;
    const { trends = [] } = await this.fetch(endpoint);
    return trends.map((text: string) => {
      const url: string = `https://www.google.com/search?q=${encodeURI(text)}`;
      return { text, url };
    });
  }

  public async getSources() {
    const endpoint: IEndpoint = endpoints.news.getSources;
    return await this.fetch(endpoint);
  }

  public async getCategories() {
    const endpoint: IEndpoint = endpoints.news.getCategories;
    const { categories = [] } = await this.fetch(endpoint);
    return categories;
  }

  public async getArticles(options: any = {}) {
    const { category, source } = options;
    const endpoint: IEndpoint = endpoints.news.getArticles;
    const articles = (await this.fetch(endpoint, { query: { category, source }, body: {} })) || {};
    return articles;
  }

  public async calculateProfit(buy: number, sell: number, volume: number) {
    const endpoint: IEndpoint = endpoints.finance.calculateProfit;
    const { profit = 0 } = await this.fetch(endpoint, { query: {}, body: { buy, sell, volume } });
    return profit;
  }

  public async getStockHighlights(from: number, to: number) {
    const endpoint: IEndpoint = endpoints.finance.getStockHighlights;
    return await this.fetch(endpoint, { query: {}, body: { from, to } });
  }

  public async getStockPotentials(from: number, to: number) {
    const endpoint: IEndpoint = endpoints.finance.getStockPotentials;
    return await this.fetch(endpoint, { query: {}, body: { from, to } });
  }

  public async getStockCompanies() {
    const endpoint: IEndpoint = endpoints.finance.getStockCompanies;
    return await this.fetch(endpoint);
  }

  public async getStockHistory(symbol: string, from: number, to: number) {
    const endpoint: IEndpoint = endpoints.finance.getStockHistory;
    return await this.fetch(endpoint, { body: {}, query: { symbol, from, to } });
  }

  public async getBanksForexRates() {
    const endpoint: IEndpoint = endpoints.banks.getForexRates;
    const response = await this.fetch(endpoint);
    const { data = [], currencies = [] } = response;
    const currency = currencies[0] || '';
    return { data, currency, currencies };
  }

  public async getForexBanks() {
    const endpoint: IEndpoint = endpoints.banks.getForexBanks;
    const banks = await this.fetch(endpoint);
    const { name: bank = '' } = banks[0] || {};
    return { bank, banks };
  }

  public async syncForexRates(id: string) {
    const endpoint: IEndpoint = endpoints.banks.syncForexRates;
    const { status = '' } = await this.fetch(endpoint, { query: {}, body: { id } });
    return status;
  }

  public async getPostalCodes() {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getPostalCodes;
    return await this.fetch(endpoint);
  }

  public async getProvinces() {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getProvinces;
    return await this.fetch(endpoint);
  }

  public async getDistricts(province_id: string) {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getDistricts;
    return await this.fetch(endpoint, { query: { province_id }, body: {} });
  }

  public async getWards(skip: number) {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getWards;
    return await this.fetch(endpoint, { query: { skip }, body: {} });
  }

  public async getTotalWards(): Promise<number> {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getTotalWards;
    const { total = 0 } = await this.fetch(endpoint);
    return total;
  }

  public async getSportsClubs(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.sports.getSportsClubs;
    return await this.fetch(endpoint);
  }

  public async getLicensePlates() {
    const endpoint: IEndpoint = endpoints.licensePlates.getLicensePlates;
    return await this.fetch(endpoint);
  }

  public async getEthnicMinorities() {
    const endpoint: IEndpoint = endpoints.ethnicMinorities.getEthnicMinorities;
    return await this.fetch(endpoint);
  }

  public async getTechnologies() {
    const endpoint: IEndpoint = endpoints.technologies.getTechnologies;
    return await this.fetch(endpoint);
  }

  public async getPhonesProviders() {
    const endpoint: IEndpoint = endpoints.phones.getPhonesProviders;
    return await this.fetch(endpoint);
  }

  public async getPhonesPrefixes() {
    const endpoint: IEndpoint = endpoints.phones.getPhonesPrefixes;
    return await this.fetch(endpoint);
  }

  public async convertLunarToSolar(year: number, month: number, date: number) {
    const endpoint: IEndpoint = endpoints.calendar.convertLunarToSolar;
    return await this.fetch(endpoint, { query: {}, body: { year, month, date } });
  }

  public async convertSolarToLunar(year: number, month: number, date: number) {
    const endpoint: IEndpoint = endpoints.calendar.convertSolarToLunar;
    return await this.fetch(endpoint, { query: {}, body: { year, month, date } });
  }

  public async getCanChi(year: number, month: number, date: number) {
    const endpoint: IEndpoint = endpoints.calendar.getCanChi;
    const { canChi = '' } = await this.fetch(endpoint, { query: {}, body: { year, month, date } });
    return canChi;
  }

  public async getVietceteraArticles(type: string) {
    const endpoint: IEndpoint = endpoints.technologies.getVietceteraArticles;
    const articles = (await this.fetch(endpoint, { query: { type }, body: {} })) || [];
    return articles;
  }

  public async getGHNProvinces() {
    const endpoint: IEndpoint = endpoints.technologies.getGHNProvinces;
    return await this.fetch(endpoint);
  }

  public async getGHNDistricts() {
    const endpoint: IEndpoint = endpoints.technologies.getGHNDistricts;
    return await this.fetch(endpoint);
  }

  public async getGHNWards() {
    const endpoint: IEndpoint = endpoints.technologies.getGHNWards;
    return await this.fetch(endpoint);
  }

  public async getMusicArtists() {
    const endpoint: IEndpoint = endpoints.music.getMusicArtists;
    return await this.fetch(endpoint);
  }
}
