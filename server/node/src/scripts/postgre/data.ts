import { TechnologySchema } from '../../models/postgre';

export const table = 'technologies';

export const schema = TechnologySchema;

export const rows: Array<any> = [
  { name: 'fpt', type: 'A.I.', url: 'https://docs.fpt.ai/en', npm: '' },
  { name: 'giaohangnhanh', type: 'Delivery', url: 'https://api.ghn.vn/', npm: '' },
  { name: 'momo', type: 'Payment', url: 'https://developers.momo.vn/#/', npm: '' },
  { name: 'onepay', type: 'Payment', url: 'https://mtf.onepay.vn/developer/', npm: 'onepay' },
  { name: 'tiki', type: 'E-commerce', url: 'https://open.tiki.vn/', npm: '' },
  { name: 'vietcetera', type: 'Blog', url: 'https://vietcetera.com/', npm: 'vietcetera' },
  { name: 'vnpay', type: 'Payment', url: 'https://sandbox.vnpayment.vn/apis/', npm: 'vnpay' },
  {
    name: 'vtcpay',
    type: 'Payment',
    url: 'https://vtcpay.vn/tai-lieu-tich-hop-website?l=en',
    npm: 'vtcpay'
  },
  { name: 'zalo', type: 'Messaging', url: 'https://developers.zalo.me/', npm: '' },
  { name: 'zalopay', type: 'Payment', url: 'https://docs.zalopay.vn/', npm: 'zalopay' }
];
