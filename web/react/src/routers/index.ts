import {
  // Administrative Divisions
  AdministrativeDivisions,
  AdministrativeDivisionsPostalCodes,
  AdministrativeDivisionsProvinces,
  AdministrativeDivisionsDistricts,
  AdministrativeDivisionsWards,
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
  GHNProvinces,
  GHNDistricts,
  GHNWards,
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
    path: 'administrative-divisions',
    text: 'Administrative Divisions',
    component: AdministrativeDivisions,
    navigation: true
  },
  {
    path: 'administrative-divisions-postal-codes',
    text: 'Administrative Divisions Postal Codes',
    component: AdministrativeDivisionsPostalCodes,
    navigation: false
  },
  {
    path: 'administrative-divisions-provinces',
    text: 'Administrative Divisions Provinces',
    component: AdministrativeDivisionsProvinces,
    navigation: false
  },
  {
    path: 'administrative-divisions-districts',
    text: 'Administrative Divisions Districts',
    component: AdministrativeDivisionsDistricts,
    navigation: false
  },
  {
    path: 'administrative-divisions-wards',
    text: 'Administrative Divisions Wards',
    component: AdministrativeDivisionsWards,
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
    path: 'ethnic-minorities-list',
    text: 'Ethnic Minorities (List)',
    component: EthnicMinoritiesList,
    navigation: false
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
    path: 'license-plates-list',
    text: 'License Plates (List)',
    component: LicensePlatesList,
    navigation: false
  },
  {
    path: 'music',
    text: 'Music',
    component: Music,
    navigation: true
  },
  {
    path: 'music-artists',
    text: 'Music Artists',
    component: MusicArtists,
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
    text: 'Technologies GHN Provinces',
    component: GHNProvinces,
    navigation: false
  },
  {
    path: 'technologies-ghn-districts',
    text: 'Technologies GHN Districts',
    component: GHNDistricts,
    navigation: false
  },
  {
    path: 'technologies-ghn-wards',
    text: 'Technologies GHN Wards',
    component: GHNWards,
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
