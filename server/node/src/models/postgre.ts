'use strict';

export const MapsProvinceShema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  capital: { type: 'text', required: true },
  level: { type: 'text', required: true },
  macro_region: { type: 'text', required: true },
  region: { type: 'text', required: true }
};
