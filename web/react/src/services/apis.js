import endpoints from './apis-configs';

class APIS {
  buildQueryString(query = {}) {
    const keys = Object.keys(query);
    return keys.map(key => `${key}=${(query[key] || '').toString()}`).join('&');
  }

  fetch(endpoint, query = {}, body = {}) {
    let { url, method } = endpoint;
    url = `${url}?${this.buildQueryString(query)}`;
    const options =
      method === 'GET'
        ? { method, headers: { 'Content-Type': 'application/json' } }
        : { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
    return new Promise(resolve => {
      fetch(url, options)
        .then(res => res.json())
        .then((res = {}) => {
          resolve(res);
        })
        .catch(error => {
          console.error(error);
          resolve({});
        });
    });
  }

  async getGeneralSecretaries() {
    const endpoint = endpoints.government.getGeneralSecretaries;
    return await this.fetch(endpoint);
  }

  async getPresidents() {
    const endpoint = endpoints.government.getPresidents;
    return await this.fetch(endpoint);
  }

  async getPrimeMinisters() {
    const endpoint = endpoints.government.getPrimeMinisters;
    return await this.fetch(endpoint);
  }

  async getNationalAssemblyChairs() {
    const endpoint = endpoints.government.getNationalAssemblyChairs;
    return await this.fetch(endpoint);
  }

  async getNationalAssemblyMembers(no) {
    const endpoint = endpoints.government.getNationalAssemblyMembers;
    return await this.fetch(endpoint, { no });
  }

  async getMinistries() {
    const endpoint = endpoints.government.getMinistries;
    return await this.fetch(endpoint);
  }

  async getMinisters(ministry) {
    const endpoint = endpoints.government.getMinisters;
    return await this.fetch(endpoint, { ministry });
  }

  async getGoogleTrends() {
    const endpoint = endpoints.news.getTrends;
    const trends = await this.fetch(endpoint);
    return trends.map(text => {
      const url = `https://www.google.com/search?q=${encodeURI(text)}`;
      return { text, url };
    });
  }

  async getSources() {
    const endpoint = endpoints.news.getSources;
    return await this.fetch(endpoint);
  }

  async getCategories() {
    const endpoint = endpoints.news.getCategories;
    return await this.fetch(endpoint);
  }

  async getArticles(options = {}) {
    const { category, source } = options;
    const endpoint = endpoints.news.getArticles;
    const { articles = [] } = (await this.fetch(endpoint, { category, source })) || {};
    return articles;
  }

  async calculateProfit(buy, sell, volume) {
    const endpoint = endpoints.finance.calculateProfit;
    return await this.fetch(endpoint, {}, { buy, sell, volume });
  }

  async getStockHighlights(from, to) {
    const endpoint = endpoints.finance.getStockHighlights;
    return await this.fetch(endpoint, {}, { from, to });
  }

  async getStockPotentials(from, to) {
    const endpoint = endpoints.finance.getStockPotentials;
    return await this.fetch(endpoint, {}, { from, to });
  }

  async getStockCompanies() {
    const endpoint = endpoints.finance.getStockCompanies;
    return await this.fetch(endpoint);
  }

  async getStockHistory(symbol, from, to) {
    const endpoint = endpoints.finance.getStockHistory;
    return await this.fetch(endpoint, {}, { symbol, from, to });
  }

  async getBanksForexRates() {
    const endpoint = endpoints.banks.getForexRates;
    const response = await this.fetch(endpoint);
    const { data = [], currencies = [] } = response;
    const currency = currencies[0] || '';
    return { data, currency, currencies };
  }

  async getForexBanks() {
    const endpoint = endpoints.banks.getForexBanks;
    const banks = await this.fetch(endpoint);
    const { name: bank = '' } = banks[0] || {};
    return { bank, banks };
  }

  async syncForex(id) {
    const endpoint = endpoints.banks.syncForex;
    const { status = '' } = await this.fetch(endpoint, {}, { id });
    return status;
  }

  async getPostalCodes() {
    const endpoint = endpoints.maps.getPostalCodes;
    return await this.fetch(endpoint);
  }

  async getDistricts() {
    const endpoint = endpoints.maps.getDistricts;
    return await this.fetch(endpoint);
  }

  async getMapsProvinces() {
    const endpoint = endpoints.maps.getProvinces;
    return await this.fetch(endpoint);
  }

  async getWards() {
    const endpoint = endpoints.maps.getWards;
    return await this.fetch(endpoint);
  }

  async getSportsClubs() {
    const endpoint = endpoints.sports.getSportsClubs;
    return await this.fetch(endpoint);
  }

  async getLicensePlates() {
    const endpoint = endpoints.licensePlates.getLicensePlates;
    return await this.fetch(endpoint);
  }

  async getEthnicMinorities() {
    const endpoint = endpoints.ethnicMinorities.getEthnicMinorities;
    return await this.fetch(endpoint);
  }

  async getTechnologies() {
    const endpoint = endpoints.technologies.getTechnologies;
    return await this.fetch(endpoint);
  }

  async getPhonesProviders() {
    const endpoint = endpoints.phones.getPhonesProviders;
    return await this.fetch(endpoint);
  }

  async getGHNProvinces() {
    const endpoint = endpoints.technologies.getGHNProvinces;
    return await this.fetch(endpoint);
  }

  async convertLunarToSolar(body = {}) {
    const endpoint = endpoints.calendar.convertLunarToSolar;
    return await this.fetch(endpoint, {}, body);
  }

  async convertSolarToLunar(body = {}) {
    const endpoint = endpoints.calendar.convertSolarToLunar;
    return await this.fetch(endpoint, {}, body);
  }

  async getCanChi(body = {}) {
    const endpoint = endpoints.calendar.getCanChi;
    const { canChi = '' } = await this.fetch(endpoint, {}, body);
    return canChi;
  }
}

const apis = new APIS();

export default apis;
