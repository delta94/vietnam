'use strict';

export const EthnicMinorityShema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  type: { type: 'text', required: true },
  type_en: { type: 'text', required: true }
};

export const GovernmentMinistryShema = {
  id: { type: 'int', primary: true, required: true },
  short: { type: 'text', required: true },
  name: { type: 'text', required: true },
  name_en: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true }
};

export const GovernmentOfficialShema = {
  id: { type: 'int', primary: true, required: true },
  ranking: { type: 'int', required: true },
  title: { type: 'text', required: true },
  title_en: { type: 'text', required: true },
  title_short: { type: 'text', required: true },
  name: { type: 'text', required: true },
  gender: { type: 'text', required: true },
  gender_en: { type: 'text', required: true },
  start_date: { type: 'text', required: true },
  end_date: { type: 'text', required: true },
  note: { type: 'text' }
};

export const LicensePlateShema = {
  id: { type: 'int', primary: true, required: true },
  license: { type: 'text', required: true },
  definition: { type: 'text', required: true },
  type: { type: 'text', required: true }
};

export const MapsProvinceShema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  capital: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true },
  macro_region: { type: 'text', required: true },
  macro_region_en: { type: 'text', required: true },
  region: { type: 'text', required: true },
  region_en: { type: 'text', required: true }
};

export const MapsDistrictSchema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true },
  province: { type: 'text', required: true }
};

export const MapsWardSchema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true },
  district: { type: 'text', required: true },
  province: { type: 'text', required: true }
};

export const TechnologySchema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  type: { type: 'text', required: true },
  url: { type: 'text', required: true },
  npm: { type: 'text' }
};

export const SportsClubShema = {
  id: { type: 'int', primary: true, required: true },
  sport: { type: 'text', required: true },
  sport_en: { type: 'text', required: true },
  competition: { type: 'text', required: true },
  city: { type: 'text', required: true },
  name: { type: 'text', required: true }
};
