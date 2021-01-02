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
    path: '/',
    component: Home
  },
  {
    path: '/banks',
    component: Banks
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/ethnic-minorities',
    component: EthnicMinorities
  },
  {
    path: '/finance',
    component: Finance
  },
  {
    path: '/government',
    component: Government
  },
  {
    path: '/license-plates',
    component: LicensePlates
  },
  {
    path: '/maps',
    component: Maps
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/phones',
    component: Phones
  },
  {
    path: '/sports',
    component: Sports
  },
  {
    path: '/technologies',
    component: Technologies
  },
  {
    path: '/vietcetera',
    component: Vietcetera
  }
];

export default routes;
