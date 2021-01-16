'use strict';

export const AdministrativeDivisionsPostalCodeShema = {
  id: { type: 'int', primary: true, required: true },
  code: { type: 'text', required: true },
  province: { type: 'text', required: true },
  province_id: { type: 'text', required: true }
};

export const AdministrativeDivisionsProvinceShema = {
  id: { type: 'int', primary: true, required: true },
  province_id: { type: 'text', required: true },
  name: { type: 'text', required: true },
  capital: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true },
  macro_region: { type: 'text', required: true },
  macro_region_en: { type: 'text', required: true },
  region: { type: 'text', required: true },
  region_en: { type: 'text', required: true }
};

export const AdministrativeDivisionsDistrictSchema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true },
  province: { type: 'text', required: true },
  province_id: { type: 'text', required: true }
};

export const AdministrativeDivisionsWardSchema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  level: { type: 'text', required: true },
  level_en: { type: 'text', required: true },
  district: { type: 'text', required: true },
  district_id: { type: 'text', required: true },
  province: { type: 'text', required: true },
  province_id: { type: 'text', required: true }
};

export const BankShema = {
  id: { type: 'int', primary: true, required: true },
  code: { type: 'text', required: true },
  name: { type: 'text', required: true },
  name_en: { type: 'text', required: true },
  name_short: { type: 'text', required: true },
  url: { type: 'text', required: true },
  type: { type: 'text', required: true },
  type_en: { type: 'text', required: true }
};

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

export const HistoryDynastyShema = {
  id: { type: 'int', primary: true, required: true },
  temple_name: { type: 'text' },
  birth_name: { type: 'text', required: true },
  birth: { type: 'int', required: true },
  death: { type: 'int', required: true },
  start_year: { type: 'int', required: true },
  end_year: { type: 'int', required: true },
  dynasty: { type: 'text', required: true }
};

export const LicensePlateShema = {
  id: { type: 'int', primary: true, required: true },
  license: { type: 'text', required: true },
  definition: { type: 'text', required: true },
  type: { type: 'text', required: true }
};

export const MusicArtists = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true }
};

export const NationalAssemblyMemberSchema = {
  id: { type: 'int', primary: true, required: true },
  no: { type: 'int', required: true },
  name: { type: 'text', require: true },
  date_of_birth: { type: 'text' },
  gender: { type: 'text' },
  province: { type: 'text' },
  percentage: { type: 'int' },
  district: { type: 'text' },
  city_of_birth: { type: 'text' },
  degree: { type: 'text' },
  active: { type: 'text' }
};

export const SportsClubShema = {
  id: { type: 'int', primary: true, required: true },
  sport: { type: 'text', required: true },
  sport_en: { type: 'text', required: true },
  competition: { type: 'text', required: true },
  city: { type: 'text', required: true },
  name: { type: 'text', required: true }
};

export const TechnologySchema = {
  id: { type: 'int', primary: true, required: true },
  name: { type: 'text', required: true },
  type: { type: 'text', required: true },
  type_id: { type: 'text', required: true },
  url: { type: 'text', required: true },
  npm: { type: 'text' }
};

export const tables = {
  administrativeDivisionsPostalCodes: {
    name: 'administrative_divisions_postal_codes',
    schema: AdministrativeDivisionsPostalCodeShema
  },
  administrativeDivisionsProvinces: {
    name: 'administrative_divisions_provinces',
    schema: AdministrativeDivisionsProvinceShema
  },
  administrativeDivisionsDistricts: {
    name: 'administrative_divisions_districts',
    schema: AdministrativeDivisionsDistrictSchema
  },
  administrativeDivisionsWards: {
    name: 'administrative_divisions_wards',
    schema: AdministrativeDivisionsWardSchema
  },
  banks: { name: 'banks', schema: BankShema },
  ethnicMinorities: { name: 'ethnic_minorities', schema: EthnicMinorityShema },
  governmentMinistries: { name: 'government_ministries', schema: GovernmentMinistryShema },
  governmentOfficials: { name: 'government_officials', schema: GovernmentOfficialShema },
  historyDynasties: { name: 'history_dynasties', schema: HistoryDynastyShema },
  licensePlates: { name: 'license_plates', schema: LicensePlateShema },
  musicArtists: { name: 'music_artists', schema: MusicArtists },
  nationalAssemblyMembers: {
    name: 'national_assembly_members',
    schema: NationalAssemblyMemberSchema
  },
  sportsClubs: { name: 'sports_clubs', schema: SportsClubShema },
  technologies: { name: 'technologies', schema: TechnologySchema }
};
