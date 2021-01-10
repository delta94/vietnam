import {
  // Banks
  Banks,
  BanksForex,
  BanksHistory,
  BanksList,
  // Calendar
  Calendar,
  CalendarConverter,
  // Docs
  Docs,
  // Ethnic Minorities
  EthnicMinorities,
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
  Home,
  // LicensePlates
  LicensePlates,
  // Maps
  Maps,
  MapsPostalCodes,
  MapsProvinces,
  MapsDistricts,
  MapsWards,
  // News
  News,
  NewsFeed,
  NewsSources,
  NewsTrends,
  // Phones
  Phones,
  PhonesPrefixes,
  PhonesProviders,
  // Sports
  Sports,
  SportsClubs,
  // Technologies
  Technologies,
  APIs,
  GiaoHangNhanh,
  Vietcetera
} from '../pages';

const routes = [
  {
    path: '',
    text: '',
    component: Home,
    navigation: false
  },
  {
    path: 'banks',
    text: 'Banks',
    component: Banks,
    navigation: true
  },
  {
    path: 'banks-forex',
    text: 'Banks Forex',
    component: BanksForex,
    navigation: false
  },
  {
    path: 'banks-history',
    text: 'Banks History',
    component: BanksHistory,
    navigation: false
  },
  {
    path: 'banks-list',
    text: 'Banks List',
    component: BanksList,
    navigation: false
  },
  {
    path: 'calendar',
    text: 'Calendar',
    component: Calendar,
    navigation: true
  },
  {
    path: 'calendar-converter',
    text: 'Calendar Converter',
    component: CalendarConverter,
    navigation: false
  },
  {
    path: 'docs',
    text: 'Docs',
    component: Docs,
    navigation: false
  },
  {
    path: 'ethnic-minorities',
    text: 'Ethnic Minorities',
    component: EthnicMinorities,
    navigation: true
  },
  {
    path: 'finance',
    text: 'Finance',
    component: Finance,
    navigation: true
  },
  {
    path: 'finance-companies',
    text: 'Finance Companies',
    component: FinanceCompanies,
    navigation: false
  },
  {
    path: 'finance-history',
    text: 'Finance History',
    component: FinanceHistory,
    navigation: false
  },
  {
    path: 'finance-highlights',
    text: 'Finance Highlights',
    component: FinanceHighlights,
    navigation: false
  },
  {
    path: 'finance-potentials',
    text: 'Finance Potentials',
    component: FinancePotentials,
    navigation: false
  },
  {
    path: 'finance-profit',
    text: 'Finance Profit',
    component: FinanceProfit,
    navigation: false
  },
  {
    path: 'government',
    text: 'Government',
    component: Government,
    navigation: true
  },
  {
    path: 'government-general-secretaries',
    text: 'Government General Secretaries',
    component: GovernmentGeneralSecretaries,
    navigation: false
  },
  {
    path: 'government-presidents',
    text: 'Government Presidents',
    component: GovernmentPresidents,
    navigation: false
  },
  {
    path: 'government-prime-ministers',
    text: 'Government Prime Ministers',
    component: GovernmentPrimeMinisters,
    navigation: false
  },
  {
    path: 'government-ministries',
    text: 'Ministries',
    component: GovernmentMinistries,
    navigation: false
  },
  {
    path: 'government-ministers',
    text: 'Ministers',
    component: GovernmentMinisters,
    navigation: false
  },
  {
    path: 'government-national-assembly-chairs',
    text: 'National Assembly Chairs',
    component: GovernmentNationalAssemblyChairs,
    navigation: false
  },
  {
    path: 'government-national-assembly-members',
    text: 'National Assembly Members',
    component: GovernmentNationalAssemblyMembers,
    navigation: false
  },
  {
    path: 'license-plates',
    text: 'License Plates',
    component: LicensePlates,
    navigation: true
  },
  {
    path: 'maps',
    text: 'Maps',
    component: Maps,
    navigation: true
  },
  {
    path: 'maps-postal-codes',
    text: 'Maps Postal Codes',
    component: MapsPostalCodes,
    navigation: false
  },
  {
    path: 'maps-provinces',
    text: 'Maps Provinces',
    component: MapsProvinces,
    navigation: false
  },
  {
    path: 'maps-districts',
    text: 'Maps Districts',
    component: MapsDistricts,
    navigation: false
  },
  {
    path: 'maps-wards',
    text: 'Maps Wards',
    component: MapsWards,
    navigation: false
  },
  {
    path: 'news',
    text: 'News',
    component: News,
    navigation: true
  },
  {
    path: 'news-feed',
    text: 'News Feed',
    component: NewsFeed,
    navigation: false
  },
  {
    path: 'news-sources',
    text: 'News Sources',
    component: NewsSources,
    navigation: false
  },
  {
    path: 'news-trends',
    text: 'News Trends',
    component: NewsTrends,
    navigation: false
  },
  {
    path: 'phones',
    text: 'Phones',
    component: Phones,
    navigation: true
  },
  {
    path: 'phones-prefixes',
    text: 'Phones Prefixes',
    component: PhonesPrefixes,
    navigation: false
  },
  {
    path: 'phones-providers',
    text: 'Phones Providers',
    component: PhonesProviders,
    navigation: false
  },
  {
    path: 'sports',
    text: 'Sports',
    component: Sports,
    navigation: true
  },
  {
    path: 'sports-clubs',
    text: 'Sports Clubs',
    component: SportsClubs,
    navigation: false
  },
  {
    path: 'technologies',
    text: 'Technologies',
    component: Technologies,
    navigation: true
  },
  {
    path: 'technologies-apis',
    text: 'Technologies APIs',
    component: APIs,
    navigation: false
  },
  {
    path: 'technologies-ghn-provinces',
    text: 'Technologies GHN',
    component: GiaoHangNhanh,
    navigation: false
  },
  {
    path: 'technologies-vietcetera',
    text: 'Technologies Vietcetera',
    component: Vietcetera,
    navigation: false
  }
];

export default routes;
