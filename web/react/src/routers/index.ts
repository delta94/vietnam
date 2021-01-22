import {
  // Administrative Divisions
  AdministrativeDivisions,
  AdministrativeDivisionsPostalCodes,
  AdministrativeDivisionsProvinces,
  AdministrativeDivisionsDistricts,
  AdministrativeDivisionsWards,
  // Banks
  Banks,
  BanksList,
  BanksForexRates,
  BanksForexHistory,
  BanksForexSync,
  // Calendar
  Calendar,
  CalendarConverter,
  // Docs
  Docs,
  // Ethnic Minorities
  EthnicMinorities,
  EthnicMinoritiesList,
  // Finance
  Finance,
  FinanceCompanies,
  FinanceHighlights,
  FinanceHistory,
  FinancePotentials,
  FinanceProfit,
  // Government
  Government,
  GovernmentGeneralSecretaries,
  GovernmentPresidents,
  GovernmentPrimeMinisters,
  GovernmentMinistries,
  GovernmentMinisters,
  GovernmentNationalAssemblyChairs,
  GovernmentNationalAssemblyMembers,
  // History
  History,
  HistoryDynasties,
  Home,
  // LicensePlates
  LicensePlates,
  LicensePlatesList,
  // Music
  Music,
  MusicArtists,
  // News
  News,
  NewsFeed,
  // Open APIs
  OpenAPIs,
  OpenAPIsList,
  GHNProvinces,
  GHNDistricts,
  GHNWards,
  Vietcetera,
  // Phones
  Phones,
  PhonesPrefixes,
  PhonesProviders,
  // Sports
  Sports,
  SportsClubs,
  SportsVLeague,
  // Weather
  Weather,
  WeatherAirVisual,
  WeatherCurrent,
  // Weather
  YouTube,
  YouTubeTrending
} from '../pages';

interface IRoute {
  path: string;
  text: string;
  component: any;
  navigation: boolean;
  demo: boolean;
  group: string;
}

const routes: Array<IRoute> = [
  {
    path: '',
    text: '',
    component: Home,
    navigation: false,
    demo: false,
    group: ''
  },
  {
    path: 'administrative-divisions',
    text: 'Administrative Divisions',
    component: AdministrativeDivisions,
    navigation: true,
    demo: false,
    group: 'administrative-divisions'
  },
  {
    path: 'administrative-divisions-postal-codes',
    text: 'Postal Codes',
    component: AdministrativeDivisionsPostalCodes,
    navigation: false,
    demo: true,
    group: 'administrative-divisions'
  },
  {
    path: 'administrative-divisions-provinces',
    text: 'Provinces',
    component: AdministrativeDivisionsProvinces,
    navigation: false,
    demo: true,
    group: 'administrative-divisions'
  },
  {
    path: 'administrative-divisions-districts',
    text: 'Districts',
    component: AdministrativeDivisionsDistricts,
    navigation: false,
    demo: true,
    group: 'administrative-divisions'
  },
  {
    path: 'administrative-divisions-wards',
    text: 'Wards',
    component: AdministrativeDivisionsWards,
    navigation: false,
    demo: true,
    group: 'administrative-divisions'
  },
  {
    path: 'banks',
    text: 'Banks',
    component: Banks,
    navigation: true,
    demo: false,
    group: 'banks'
  },
  {
    path: 'banks-list',
    text: 'Banks List',
    component: BanksList,
    navigation: false,
    demo: true,
    group: 'banks'
  },
  {
    path: 'banks-forex-rates',
    text: 'Banks Forex',
    component: BanksForexRates,
    navigation: false,
    demo: true,
    group: 'banks'
  },
  {
    path: 'banks-forex-history',
    text: 'Forex History',
    component: BanksForexHistory,
    navigation: false,
    demo: false,
    group: 'banks'
  },
  {
    path: 'banks-forex-sync',
    text: 'Sync Forex',
    component: BanksForexSync,
    navigation: false,
    demo: true,
    group: 'banks'
  },
  {
    path: 'calendar',
    text: 'Calendar',
    component: Calendar,
    navigation: true,
    demo: false,
    group: 'calendar'
  },
  {
    path: 'calendar-converter',
    text: 'Converter',
    component: CalendarConverter,
    navigation: false,
    demo: true,
    group: 'calendar'
  },
  {
    path: 'docs',
    text: 'Docs',
    component: Docs,
    navigation: false,
    demo: false,
    group: 'docs'
  },
  {
    path: 'ethnic-minorities',
    text: 'Ethnic Minorities',
    component: EthnicMinorities,
    navigation: true,
    demo: false,
    group: 'ethnic-minorities'
  },
  {
    path: 'ethnic-minorities-list',
    text: 'List',
    component: EthnicMinoritiesList,
    navigation: false,
    demo: true,
    group: 'ethnic-minorities'
  },
  {
    path: 'finance',
    text: 'Finance',
    component: Finance,
    navigation: true,
    demo: false,
    group: 'finance'
  },
  {
    path: 'finance-companies',
    text: 'Companies',
    component: FinanceCompanies,
    navigation: false,
    demo: true,
    group: 'finance'
  },
  {
    path: 'finance-history',
    text: 'History',
    component: FinanceHistory,
    navigation: false,
    demo: true,
    group: 'finance'
  },
  {
    path: 'finance-highlights',
    text: 'Highlights',
    component: FinanceHighlights,
    navigation: false,
    demo: false,
    group: 'finance'
  },
  {
    path: 'finance-potentials',
    text: 'Potentials',
    component: FinancePotentials,
    navigation: false,
    demo: false,
    group: 'finance'
  },
  {
    path: 'finance-profit',
    text: 'Profit',
    component: FinanceProfit,
    navigation: false,
    demo: false,
    group: 'finance'
  },
  {
    path: 'government',
    text: 'Government',
    component: Government,
    navigation: true,
    demo: false,
    group: 'government'
  },
  {
    path: 'government-general-secretaries',
    text: 'General Secretaries',
    component: GovernmentGeneralSecretaries,
    navigation: false,
    demo: false,
    group: 'government'
  },
  {
    path: 'government-presidents',
    text: 'Presidents',
    component: GovernmentPresidents,
    navigation: false,
    demo: true,
    group: 'government'
  },
  {
    path: 'government-prime-ministers',
    text: 'Prime Ministers',
    component: GovernmentPrimeMinisters,
    navigation: false,
    demo: true,
    group: 'government'
  },
  {
    path: 'government-ministries',
    text: 'Ministries',
    component: GovernmentMinistries,
    navigation: false,
    demo: true,
    group: 'government'
  },
  {
    path: 'government-ministers',
    text: 'Ministers',
    component: GovernmentMinisters,
    navigation: false,
    demo: true,
    group: 'government'
  },
  {
    path: 'government-national-assembly-chairs',
    text: 'National Assembly Chairs',
    component: GovernmentNationalAssemblyChairs,
    navigation: false,
    demo: true,
    group: 'government'
  },
  {
    path: 'government-national-assembly-members',
    text: 'National Assembly Members',
    component: GovernmentNationalAssemblyMembers,
    navigation: false,
    demo: true,
    group: 'government'
  },
  {
    path: 'history',
    text: 'History',
    component: History,
    navigation: true,
    demo: false,
    group: 'history'
  },
  {
    path: 'history-dynasties',
    text: 'Dynasties',
    component: HistoryDynasties,
    navigation: false,
    demo: true,
    group: 'history'
  },
  {
    path: 'license-plates',
    text: 'License Plates',
    component: LicensePlates,
    navigation: true,
    demo: false,
    group: 'license-plates'
  },
  {
    path: 'license-plates-list',
    text: 'List',
    component: LicensePlatesList,
    navigation: false,
    demo: true,
    group: 'license-plates'
  },
  {
    path: 'music',
    text: 'Music',
    component: Music,
    navigation: true,
    demo: false,
    group: 'music'
  },
  {
    path: 'music-artists',
    text: 'Artists',
    component: MusicArtists,
    navigation: false,
    demo: true,
    group: 'music'
  },
  {
    path: 'news',
    text: 'News',
    component: News,
    navigation: true,
    demo: false,
    group: 'news'
  },
  {
    path: 'news-feed',
    text: 'Feed',
    component: NewsFeed,
    navigation: false,
    demo: true,
    group: 'news'
  },
  {
    path: 'open-apis',
    text: 'Open APIs',
    component: OpenAPIs,
    navigation: true,
    demo: false,
    group: 'open-apis'
  },
  {
    path: 'open-apis-list',
    text: 'List',
    component: OpenAPIsList,
    navigation: false,
    demo: true,
    group: 'open-apis'
  },
  {
    path: 'open-apis-ghn-provinces',
    text: 'GHN Provinces',
    component: GHNProvinces,
    navigation: false,
    demo: true,
    group: 'open-apis'
  },
  {
    path: 'open-apis-ghn-districts',
    text: 'GHN Districts',
    component: GHNDistricts,
    navigation: false,
    demo: true,
    group: 'open-apis'
  },
  {
    path: 'open-apis-ghn-wards',
    text: 'GHN Wards',
    component: GHNWards,
    navigation: false,
    demo: true,
    group: 'open-apis'
  },
  {
    path: 'open-apis-vietcetera',
    text: 'Vietcetera',
    component: Vietcetera,
    navigation: false,
    demo: true,
    group: 'open-apis'
  },
  {
    path: 'phones',
    text: 'Phones',
    component: Phones,
    navigation: true,
    demo: false,
    group: 'phones'
  },
  {
    path: 'phones-prefixes',
    text: 'Prefixes',
    component: PhonesPrefixes,
    navigation: false,
    demo: true,
    group: 'phones'
  },
  {
    path: 'phones-providers',
    text: 'Providers',
    component: PhonesProviders,
    navigation: false,
    demo: true,
    group: 'phones'
  },
  {
    path: 'sports',
    text: 'Sports',
    component: Sports,
    navigation: true,
    demo: false,
    group: 'sports'
  },
  {
    path: 'sports-clubs',
    text: 'Clubs',
    component: SportsClubs,
    navigation: false,
    demo: true,
    group: 'sports'
  },
  {
    path: 'sports-vleague',
    text: 'VLeague',
    component: SportsVLeague,
    navigation: false,
    demo: true,
    group: 'sports'
  },
  {
    path: 'weather',
    text: 'Weather',
    component: Weather,
    navigation: true,
    demo: false,
    group: 'weather'
  },
  {
    path: 'weather-air-visual',
    text: 'Air Visual',
    component: WeatherAirVisual,
    navigation: false,
    demo: true,
    group: 'weather'
  },
  {
    path: 'weather-current',
    text: 'Current',
    component: WeatherCurrent,
    navigation: false,
    demo: true,
    group: 'weather'
  },
  {
    path: 'youtube',
    text: 'YouTube',
    component: YouTube,
    navigation: true,
    demo: false,
    group: 'youtube'
  },
  {
    path: 'youtube-trending',
    text: 'Trending',
    component: YouTubeTrending,
    navigation: false,
    demo: true,
    group: 'youtube'
  }
];

export default routes;
