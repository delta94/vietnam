import {
  Banks,
  Calendar,
  EthnicMinorities,
  Finance,
  Government,
  Home,
  LicensePlates,
  Maps,
  News,
  Phones,
  Sports,
  Technologies,
  Vietcetera
} from '../pages';

const routes = [
  {
    path: '',
    text: '',
    component: Home
  },
  {
    path: 'banks',
    text: 'Banks',
    component: Banks
  },
  {
    path: 'calendar',
    text: 'Calendar',
    component: Calendar
  },
  {
    path: 'ethnic-minorities',
    text: 'Ethnic Minorities',
    component: EthnicMinorities
  },
  {
    path: 'finance',
    text: 'Finance',
    component: Finance
  },
  {
    path: 'government',
    text: 'Government',
    component: Government
  },
  {
    path: 'license-plates',
    text: 'License Plates',
    component: LicensePlates
  },
  {
    path: 'maps',
    text: 'Maps',
    component: Maps
  },
  {
    path: 'news',
    text: 'News',
    component: News
  },
  {
    path: 'phones',
    text: 'Phones',
    component: Phones
  },
  {
    path: 'sports',
    text: 'Sports',
    component: Sports
  },
  {
    path: 'technologies',
    text: 'Technologies',
    component: Technologies
  },
  {
    path: 'vietcetera',
    text: 'Vietcetera',
    component: Vietcetera
  }
];

export default routes;
