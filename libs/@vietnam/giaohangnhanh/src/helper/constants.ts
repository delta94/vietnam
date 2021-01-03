'use strict';

export const shippingStatuses = [
  { status: 'ready_to_pick', description: 'Shipping order has just been created' },
  { status: 'picking', description: 'Shipper is coming to pick up the goods' },
  { status: 'cancel', description: 'Shipping order has been cancelled' },
  { status: 'money_collect_picking', description: 'Shipper are interacting with the seller' },
  { status: 'picked', description: 'Shipper is picked the goods' },
  { status: 'storing', description: 'The goods has been shipped to GHN sorting hub' },
  { status: 'transporting', description: 'The goods are being rotated' },
  {
    status: 'sorting',
    description: 'The goods are being classified (at the warehouse classification)'
  },
  { status: 'delivering', description: 'Shipper is delivering the goods to customer' },
  { status: 'money_collect_delivering', description: 'Shipper is interacting with the buyer' },
  { status: 'delivered', description: 'The goods has been delivered to customer' },
  { status: 'delivery_fail', description: "The goods hasn't been delivered to customer" },
  {
    status: 'waiting_to_return',
    description: 'The goods are pending delivery (can be delivered within 24/48h)'
  },
  {
    status: 'return',
    description: 'The goods are waiting to return to seller/merchant after 3 times delivery failed'
  },
  { status: 'return_transporting', description: 'The goods are being rotated' },
  {
    status: 'return_sorting',
    description: 'The goods are being classified (at the warehouse classification)'
  },
  { status: 'returning', description: 'The shipper is returning for seller' },
  { status: 'return_fail', description: 'The returning is failed' },
  { status: 'returned', description: 'The goods has been returned to seller/merchant' },
  {
    status: 'exception',
    description:
      'The goods exception handling (cases that go against the process).\nFor example:\n- The order has been taken but the reseller has requested it\n- The order has been delivered but the buyer wants to return it'
  },
  { status: 'damage', description: 'Damaged goods' },
  { status: 'lost', description: 'The goods are lost' }
];

const production: string = `https://online-gateway.ghn.vn`;
const test: string = `https://dev-online-gateway.ghn.vn`;

export const apis = {
  order: {
    getOrder: {
      production: `${production}/shiip/public-api/v2/shipping-order/detail`,
      test: `${test}/shiip/public-api/v2/shipping-order/detail`,
      method: 'POST',
      queryParams: ['order_code']
    },
    getOrderByClientCode: {
      production: `${production}/shiip/public-api/v2/shipping-order/detail-by-client-code`,
      test: `${test}/shiip/public-api/v2/shipping-order/detail-by-client-code`,
      method: 'POST',
      queryParams: ['client_order_code']
    },
    getOrderFee: {
      production: `${production}/shiip/public-api/v2/shipping-order/soc`,
      test: `${test}/shiip/public-api/v2/shipping-order/soc`,
      method: 'POST',
      queryParams: ['shop_id', 'order_code']
    },
    createOrder: {
      production: `${production}/shiip/public-api/v2/shipping-order/create`,
      test: `${test}/shiip/public-api/v2/shipping-order/create`,
      method: 'POST',
      queryParams: []
    },
    updateOrder: {
      production: `${production}/shiip/public-api/v2/shipping-order/update`,
      test: `${test}/shiip/public-api/v2/shipping-order/update`,
      method: 'POST',
      queryParams: ['shop_id', 'order_code', 'note']
    },
    updateOrderCOD: {
      production: `${production}/shiip/public-api/v2/shipping-order/updateCOD`,
      test: `${test}/shiip/public-api/v2/shipping-order/updateCOD`,
      method: 'POST',
      queryParams: ['order_code', 'cod_amount']
    },
    printOrder: {
      production: `${production}/shiip/public-api/v2/a5/gen-token`,
      test: `${test}/shiip/public-api/v2/a5/gen-token`,
      method: 'POST',
      queryParams: ['order_codes']
    },
    returnOrder: {
      production: `${production}/shiip/public-api/v2/switch-status/return`,
      test: `${test}/shiip/public-api/v2/switch-status/return`,
      method: 'POST',
      queryParams: ['order_codes']
    },
    cancelOrder: {
      production: `${production}/shiip/public-api/v2/switch-status/cancel`,
      test: `${test}/shiip/public-api/v2/switch-status/cancel`,
      method: 'POST',
      queryParams: ['order_codes']
    }
  },
  service: {
    getServices: {
      production: `${production}/shiip/public-api/v2/shipping-order/available-services`,
      test: `${test}/shiip/public-api/v2/shipping-order/available-services`,
      method: 'POST',
      queryParams: ['shop_id', 'from_district', 'to_district']
    },
    calculateFee: {
      production: `${production}/shiip/public-api/v2/shipping-order/fee`,
      test: `${test}/shiip/public-api/v2/shipping-order/fee`,
      method: 'POST',
      queryParams: [
        'shop_id',
        'service_id',
        'service_type_id',
        'insurance_value',
        'coupon',
        'from_district_id',
        'to_district_id',
        'to_ward_code',
        'height',
        'length',
        'weight',
        'width'
      ]
    },
    calculateExpectedDeliveryTime: {
      production: `${production}/shiip/public-api/v2/shipping-order/leadtime`,
      test: `${test}/shiip/public-api/v2/shipping-order/leadtime`,
      method: 'POST',
      queryParams: [
        'service_id',
        'from_district_id',
        'from_ward_code',
        'to_district_id',
        'to_ward_code'
      ]
    }
  },
  address: {
    getProvinces: {
      production: `${production}/shiip/public-api/master-data/province`,
      test: `${test}/shiip/public-api/master-data/province`,
      method: 'GET',
      queryParams: []
    },
    getDistricts: {
      production: `${production}/shiip/public-api/master-data/district`,
      test: `${test}/shiip/public-api/master-data/district`,
      method: 'GET',
      queryParams: [`province_id`]
    },
    getWards: {
      production: `${production}/shiip/public-api/master-data/ward`,
      test: `${test}/shiip/public-api/master-data/ward`,
      method: 'GET',
      queryParams: [`district_id`]
    },
    getStations: {
      production: `${production}/shiip/public-api/v2/station/get`,
      test: `${test}/shiip/public-api/v2/station/get`,
      method: 'GET',
      queryParams: [`district_id`, `ward_code`, `offset`, `limit`]
    }
  },
  store: {
    getStores: {
      production: `${production}/shiip/public-api/v2/shop/all`,
      test: `${test}/shiip/public-api/v2/shop/all`,
      method: 'POST',
      queryParams: ['offset', 'limit', 'client_phone']
    },
    createStore: {
      production: `${production}/shiip/public-api/v2/shop/register`,
      test: `${test}/shiip/public-api/v2/shop/register`,
      method: 'GET',
      queryParams: ['district_id', 'ward_code', 'name', 'phone', 'address']
    },
    addStaff: {
      production: `${production}/shiip/public-api/v2/shop/add-client`,
      test: `${test}/shiip/public-api/v2/shop/add-client`,
      method: 'POST',
      queryParams: ['username', 'shop_id']
    },
    deliveryAgain: {
      production: `${production}/shiip/public-api/v2/switch-status/storing`,
      test: `${test}/shiip/public-api/v2/switch-status/storing`,
      method: 'POST',
      queryParams: ['order_codes', 'shop_id']
    }
  },
  ticket: {
    getTicket: {
      production: `${production}/shiip/public-api/ticket/detail`,
      test: `${test}/shiip/public-api/ticket/detail`,
      method: 'GET',
      queryParams: ['ticket_id']
    },
    createTicket: {
      production: `${production}/shiip/public-api/ticket/create`,
      test: `${test}/shiip/public-api/ticket/create`,
      method: 'POST',
      queryParams: ['order_code', 'category', 'attachments', 'description']
    },
    addFeedback: {
      production: `${production}/shiip/public-api/ticket/reply`,
      test: `${test}/shiip/public-api/ticket/reply`,
      method: 'POST',
      queryParams: ['ticket_id', 'attachments', 'description']
    }
  }
};

export interface IRequestOptions {
  query?: any;
  body?: any;
}

export interface IEndpoint {
  production: string;
  test: string;
  method: string | 'GET' | 'POST' | 'PUT' | 'DELETE';
  queryParams?: Array<string>;
  bodyParams?: Array<string>;
}

export interface IOptions {
  test?: boolean;
}

export interface IResponse {
  code?: number;
  message?: string;
  data?: any;
}

export interface IProvince {
  id: number;
  name: string;
  code: string;
}

export interface IDistrict {
  id: number;
  provinceID: number;
  name: string;
  code: string;
  type: string;
  supportType: string;
}

export interface IWard {
  code: string;
  districtID: number;
  name: string;
}

export interface IStation {
  address: string;
  code: string;
  id: number;
  name: string;
  parent: Array<string>;
  email: string;
  latitude: number;
  longitude: number;
}

export interface IPagination {
  offset?: number;
  limit?: number;
}

export interface IStore {
  _id?: number;
  name: string;
  phone: string;
  address: string;
  ward_code?: string;
  district_id?: number;
  client_id?: 2500755;
  bank_account_id?: number;
  status?: number;
  location?: any;
  version_no?: string;
  updated_ip?: string;
  updated_employee?: number;
  updated_client?: number;
  updated_source?: string;
  updated_date?: string;
  created_ip?: string;
  created_employee?: number;
  created_client?: number;
  created_source?: string;
  created_date?: string;
}
