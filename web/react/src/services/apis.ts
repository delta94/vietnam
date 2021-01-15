import { endpoints } from '../configs';
import { IEndpoint } from '../configs/interfaces';

interface IRequest {
  query: any;
  body: any;
}

export default class APIS {
  private buildQueryString(query: any = {}): string {
    const keys: Array<string> = Object.keys(query);
    if (!keys.length) return '';
    return keys.map((key: string) => `${key}=${(query[key] || '').toString()}`).join('&');
  }

  private fetch(endpoint: IEndpoint, request: IRequest = { query: {}, body: {} }): Promise<any> {
    const { query = {}, body = {} } = request;
    const { url, method } = endpoint;
    const queryString: string = this.buildQueryString(query);
    const input: string = queryString ? `${url}?${queryString}` : url;
    const timeout: number = 1000 * 60 * 6;
    const headers = { 'Content-Type': 'application/json' };
    const options =
      method === 'GET'
        ? { method, timeout, headers }
        : { method, timeout, headers, body: JSON.stringify(body) };
    return new Promise(resolve => {
      fetch(input, options)
        .then(res => res.json())
        .then((res: any = {}) => {
          resolve(res);
        })
        .catch((error: Error) => {
          console.error('fetch', error);
          resolve([]);
        });
    });
  }

  public async getGeneralSecretaries(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getGeneralSecretaries;
    return await this.fetch(endpoint);
  }

  public async getPresidents(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getPresidents;
    return await this.fetch(endpoint);
  }

  public async getPrimeMinisters(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getPrimeMinisters;
    return await this.fetch(endpoint);
  }

  public async getNationalAssemblyChairs(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getNationalAssemblyChairs;
    return await this.fetch(endpoint);
  }

  public async getNationalAssemblyMembers(no: number): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getNationalAssemblyMembers;
    return await this.fetch(endpoint, { query: { no }, body: {} });
  }

  public async getMinistries(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getMinistries;
    return await this.fetch(endpoint);
  }

  public async getMinisters(ministry: string): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.government.getMinisters;
    return await this.fetch(endpoint, { query: { ministry }, body: {} });
  }

  public async getGoogleTrends(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.news.getTrends;
    const { trends = [] } = await this.fetch(endpoint);
    return trends.map((text: string) => {
      const url: string = `https://www.google.com/search?q=${encodeURI(text)}`;
      return { text, url };
    });
  }

  public async getSources(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.news.getSources;
    return await this.fetch(endpoint);
  }

  public async getCategories(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.news.getCategories;
    const { categories = [] } = await this.fetch(endpoint);
    return categories;
  }

  public async getArticles(options: any = {}): Promise<Array<any>> {
    const { category, source } = options;
    const endpoint: IEndpoint = endpoints.news.getArticles;
    const articles = (await this.fetch(endpoint, { query: { category, source }, body: {} })) || {};
    return articles;
  }

  public async calculateProfit(buy: number, sell: number, volume: number): Promise<number> {
    const endpoint: IEndpoint = endpoints.finance.calculateProfit;
    const { profit = 0 } = await this.fetch(endpoint, { query: {}, body: { buy, sell, volume } });
    return profit;
  }

  public async getStockHighlights(from: number, to: number): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.finance.getStockHighlights;
    return await this.fetch(endpoint, { query: {}, body: { from, to } });
  }

  public async getStockPotentials(from: number, to: number): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.finance.getStockPotentials;
    return await this.fetch(endpoint, { query: {}, body: { from, to } });
  }

  public async getStockCompanies(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.finance.getStockCompanies;
    return await this.fetch(endpoint);
  }

  public async getStockHistory(symbol: string, from: number, to: number): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.finance.getStockHistory;
    return await this.fetch(endpoint, { body: {}, query: { symbol, from, to } });
  }

  public async getBanksForexRates(): Promise<any> {
    const endpoint: IEndpoint = endpoints.banks.getForexRates;
    const response = await this.fetch(endpoint);
    const { data = [], currencies = [] } = response;
    const currency = currencies[0] || '';
    return { data, currency, currencies };
  }

  public async getForexBanks(): Promise<Array<string>> {
    const endpoint: IEndpoint = endpoints.banks.getForexBanks;
    const { banks = [] } = (await this.fetch(endpoint)) || {};
    return banks;
  }

  public async syncForexRates(id: string): Promise<string> {
    const endpoint: IEndpoint = endpoints.banks.syncForexRates;
    const { status = '' } = await this.fetch(endpoint, { query: {}, body: { id } });
    return status;
  }

  public async getPostalCodes(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getPostalCodes;
    return await this.fetch(endpoint);
  }

  public async getProvinces(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getProvinces;
    return await this.fetch(endpoint);
  }

  public async getDistricts(province_id: string): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.administrativeDivisions.getDistricts;
    return await this.fetch(endpoint, { query: { province_id }, body: {} });
  }

  public async getWards(skip: number): Promise<Array<any>> {
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

  public async getLicensePlates(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.licensePlates.getLicensePlates;
    return await this.fetch(endpoint);
  }

  public async getEthnicMinorities(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.ethnicMinorities.getEthnicMinorities;
    return await this.fetch(endpoint);
  }

  public async getOpenAPIs(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.openAPIs.getOpenAPIs;
    return await this.fetch(endpoint);
  }

  public async getPhonesProviders(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.phones.getPhonesProviders;
    return await this.fetch(endpoint);
  }

  public async getPhonesPrefixes(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.phones.getPhonesPrefixes;
    return await this.fetch(endpoint);
  }

  public async convertLunarToSolar(year: number, month: number, date: number): Promise<any> {
    const endpoint: IEndpoint = endpoints.calendar.convertLunarToSolar;
    return await this.fetch(endpoint, { query: {}, body: { year, month, date } });
  }

  public async convertSolarToLunar(year: number, month: number, date: number): Promise<any> {
    const endpoint: IEndpoint = endpoints.calendar.convertSolarToLunar;
    return await this.fetch(endpoint, { query: {}, body: { year, month, date } });
  }

  public async getCanChi(year: number, month: number, date: number): Promise<string> {
    const endpoint: IEndpoint = endpoints.calendar.getCanChi;
    const { canChi = '' } = await this.fetch(endpoint, { query: {}, body: { year, month, date } });
    return canChi;
  }

  public async getVietceteraArticles(type: string): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.openAPIs.getVietceteraArticles;
    const articles = (await this.fetch(endpoint, { query: { type }, body: {} })) || [];
    return articles;
  }

  public async getGHNProvinces(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.openAPIs.getGHNProvinces;
    return await this.fetch(endpoint);
  }

  public async getGHNDistricts(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.openAPIs.getGHNDistricts;
    return await this.fetch(endpoint);
  }

  public async getGHNWards(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.openAPIs.getGHNWards;
    return await this.fetch(endpoint);
  }

  public async getMusicArtists(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.music.getMusicArtists;
    return await this.fetch(endpoint);
  }

  public async getDynasties(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.history.getDynasties;
    return await this.fetch(endpoint);
  }

  public async getCurrentWeather(city: string): Promise<any> {
    const endpoint: IEndpoint = endpoints.weather.getCurrentWeather;
    return await this.fetch(endpoint, { query: { city }, body: {} });
  }

  public async getYouTubeTrending(categoryId: number = 0): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.youtube.getTrending;
    return await this.fetch(endpoint, { query: { categoryId }, body: {} });
  }

  public async getYouTubeVideoCategories(): Promise<Array<any>> {
    const endpoint: IEndpoint = endpoints.youtube.getVideoCategories;
    return await this.fetch(endpoint);
  }
}
