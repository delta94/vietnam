export interface IPeriod {
  label: string;
  value: string;
}

export interface IMonth {
  name: string;
  short: string;
}

export interface IEndpoints {
  administrativeDivisions: IAdministrativeDivisionsEndpoints;
  banks: IBanksEndpoints;
  calendar: ICalendarEndpoints;
  ethnicMinorities: IEthnicMinoritiesEndpoints;
  finance: IFinanceEndpoints;
  government: IGovernmentEndpoints;
  history: IHistoryEndpoints;
  information: IInformationEndpoints;
  licensePlates: ILicensePlatesEndpoints;
  music: IMusicEndpoints;
  news: INewsEndpoints;
  openAPIs: IOpenAPIsEndpoints;
  sports: ISportsEndpoints;
  usa: IUSAEndpoints;
  visas: IVisasEndpoints;
  weather: IWeatherEndpoints;
  youtube: IYouTubeEndpoints;
}

export interface IAdministrativeDivisionsEndpoints {
  getPostalCodes: IEndpoint;
  getProvinces: IEndpoint;
  getDistricts: IEndpoint;
  getWards: IEndpoint;
  getTotalWards: IEndpoint;
}

export interface IBanksEndpoints {
  getBanks: IEndpoint;
  getForexBanks: IEndpoint;
  getForexRates: IEndpoint;
  syncForexRates: IEndpoint;
}
export interface ICalendarEndpoints {
  convertLunarToSolar: IEndpoint;
  convertSolarToLunar: IEndpoint;
  getCanChi: IEndpoint;
  getTietKhi: IEndpoint;
}
export interface IEthnicMinoritiesEndpoints {
  getEthnicMinorities: IEndpoint;
}
export interface IFinanceEndpoints {
  getStockCompanies: IEndpoint;
  getStockHistory: IEndpoint;
  getStockHighlights: IEndpoint;
  getStockPotentials: IEndpoint;
  calculateProfit: IEndpoint;
}
export interface IGovernmentEndpoints {
  getGeneralSecretaries: IEndpoint;
  getPresidents: IEndpoint;
  getPrimeMinisters: IEndpoint;
  getNationalAssemblyChairs: IEndpoint;
  getNationalAssemblyMembers: IEndpoint;
  getMinistries: IEndpoint;
  getMinisters: IEndpoint;
}

export interface IHistoryEndpoints {
  getDynasties: IEndpoint;
}

export interface ILicensePlatesEndpoints {
  getLicensePlates: IEndpoint;
}

export interface IMusicEndpoints {
  getArtists: IEndpoint;
}

export interface INewsEndpoints {
  getArticles: IEndpoint;
  getTrends: IEndpoint;
  getSources: IEndpoint;
  getCategories: IEndpoint;
}

export interface IOpenAPIsEndpoints {
  getOpenAPIs: IEndpoint;
  getGHNProvinces: IEndpoint;
  getGHNDistricts: IEndpoint;
  getGHNWards: IEndpoint;
  getVietceteraArticles: IEndpoint;
}

export interface IInformationEndpoints {
  getPhonesPrefixes: IEndpoint;
  getPhonesProviders: IEndpoint;
}
export interface ISportsEndpoints {
  getSportsClubs: IEndpoint;
  getVLeague: IEndpoint;
}

export interface IWeatherEndpoints {
  getCurrentWeather: IEndpoint;
  getAirVisual: IEndpoint;
  getAirVisualCities: IEndpoint;
}

export interface IUSAEndpoints {
  getCongress: IEndpoint;
}

export interface IVisasEndpoints {
  getVisas: IEndpoint;
}

export interface IYouTubeEndpoints {
  getTrending: IEndpoint;
  getVideoCategories: IEndpoint;
}

export interface IEndpoint {
  id: string;
  public: boolean;
  name: string;
  path: string;
  url: string;
  demo: string;
  method: string;
  request: IEndpointRequest;
  response: IEndpointResponse;
}

export interface IEndpointRequest {
  headers?: Array<IEndpointRequestHeader>;
  query: Array<IEndpointRequestQuery>;
  body: Array<IEndpointRequestBody>;
}

export interface IEndpointRequestHeader {
  key: string;
  value: string;
}

export interface IEndpointRequestQuery {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface IEndpointRequestBody {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface IEndpointResponse {
  200: IEndpointResponseDetails;
  400: IEndpointResponseDetails;
}

export interface IEndpointResponseDetails {
  schema: Array<IEndpointResponseSchema>;
  example: any;
}

export interface IEndpointResponseSchema {
  name: string;
  type: string;
  description: string;
}
