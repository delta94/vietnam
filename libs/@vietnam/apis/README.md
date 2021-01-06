# VIETNAM APIS

[Node.js](https://nodejs.org/en/) client library for using [Vietnam](https://en.wikipedia.org/wiki/Vietnam) APIs.

If you've found an bug/issue, please [send me an email](mailto:hieumdoan@gmail.com).

If you enjoyed this project — or just feeling generous, consider [buying me a beer](https://www.paypal.com/paypalme/hieudoanm/). Cheers! 🍻

- [VIETNAM APIS](#vietnam-apis)
  - [Installation](#installation)
  - [APIs](#apis)
    - [Calendar](#calendar)
    - [Ethnic Minorities](#ethnic-minorities)
    - [Government](#government)
    - [License Plates](#license-plates)
    - [Maps](#maps)
    - [Phones](#phones)
    - [Sports](#sports)
  - [Other Libraries](#other-libraries)

## Installation

```sh
npm install vnapis
## OR 
yarn add vnapis
```

## APIs

### Calendar

```ts
import { calendar } from 'vnapis';

// Convert Solar to Lunar Date
const { date, month, year } = calendar.convertSolarToLunar(8, 8, 2020); // { date: 19, month: 6, year: 2020 }

// Convert Lunar to Solar Date
const { date, month, year } = calendar.convertLunarToSolar(19, 6, 2020); // { date: 8, month: 8, year: 2020 }

// List of Can
const listOfCan = calendar.getListOfCan();

// List of Chi
const listOfChi = calendar.getListOfChi();

// Get Can Chi of Lunar Year
const canChiOfYear = calendar.getCanChiOfYear(2020); // Canh Tý

// Get Can Chi of Lunar Month - Lunar Year
const canChiOfMonth = calendar.getCanChiOfMonth(6, 2020); // Quý Mùi

// Get Can Chi of Lunar Date - Lunar Month - Lunar Year
const canChiOfDate = calendar.getCanChiOfDate(19, 6, 2020); // Quý Mùi

// Check Solar Leap Year
const isSolarLeapYear = calendar.isSolarLeapYear(2020); // true

// Check Lunar Leap Year
const isLunarLeapYear = calendar.isLunarLeapYear(2020); // true
```

### Ethnic Minorities

```ts
import { ethnicMinorities } from 'vnapis';
 
// Get Ethnic Minorities
const minorities = await ethnicMinorities.getEthnicMinorities();
```

### Government

```ts
import { government } from 'vnapis';

// Get National Assembly Members
const nationalAssemblyMembers = government.getNationalAssemblyMembers(14); // options: from 1 to 14 - default 14

// Get Ministries
const ministries = government.getMinistries();

// Get Incumbents
const incumbents = government.getIncumbents();

// Get General Secretaries
const generalSecretaries = government.getGeneralSecretaries();

// Get Presidents
const presidents = government.getPresidents();

// Get Prime Ministers
const primeMinisters = government.getPrimeMinisters();

// Get National Assembly Chairs
const nationalAssemblyChairs = government.getNationalAssemblyChairs();

// Get Ethnic Minority Affairs Leaders
const ethnicMinorityAffairsLeaders = government.getEthnicMinorityAffairsLeaders();

// Get Government Inspectorate Leaders
const governmentInspectorateLeaders = government.getGovernmentInspectorateLeaders();

// Get Government Office Leaders
const governmentOfficeLeaders = government.getGovernmentOfficeLeaders();

// Get State Bank Governors
const stateBankGovernors = government.getStateBankGovernors();

// Get Agriculture and Rural Development Ministers
const ministers = government.getAgricultureRuralDevelopmentMinisters();

// Get Construction Ministers
const ministers = government.getConstructionMinisters();

// Get Culture, Sports and Tourism Ministers
const ministers = government.getCultureSportsTourismMinisters();

// Get Education and Training Ministers
const ministers = government.getEducationTrainingMinisters();

// Get Finance Leaders
const ministers = government.getFinanceMinisters();

// Get Foreign Affairs Ministers
const ministers = government.getForeignAffairsMinisters();

// Get Health Ministers
const ministers = government.getHealthMinisters();

// Get Home Affairs Ministers
const ministers = government.getHomeAffairsMinisters();

// Get Industry and Trade Ministers
const ministers = government.getIndustryTradeMinisters();

// Get Information and Communications Ministers
const ministers = government.getInformationCommunicationsMinisters();

// Get Justice Ministers
const ministers = government.getJusticeMinisters();

// Get Labour - Invalids and Social Affairs Leaders
const ministers = government.getLabourInvalidsSocialAffairsMinisters();

// Get National Defence Ministers
const ministers = government.getNationalDefenceMinisters();

// Get Natural Resources and Environment Ministers
const ministers = government.getNaturalResourcesEnvironmentMinisters();

// Get Planning and Investment Ministers
const ministers = government.getPlanningInvestmentMinisters();

// Get Public Security Ministers
const ministers = government.getPublicSecurityMinisters();

// Get Science and Technology Leaders
const ministers = government.getScienceTechnologyMinisters();

// Get Transport Ministers
const ministers = government.getTransportMinisters();
```

### License Plates

```ts
import { licensePlates } from 'vnapis';
 
// Get License Plates
const plates = await licensePlates.getLicensePlates();
```

### Maps

```ts
import { maps } from 'vnapis';
 
// Get Postal Codes
const postalCodes = maps.getPostalCodes();
 
// Get Provinces
const provinces = maps.getProvinces();
 
// Get Districts
const districts = maps.getDistricts();
 
// Get Wards
const wards = maps.getWards();
```

### Phones

```ts
import { phones } from 'vnapis';
 
// Get Marco Regions
const marcoRegions: Array<any> = phones.getMarcoRegions();
 
// Get Regions
const regions: Array<any> = phones.getRegions();
 
// Get Providers
const providers: Array<any> = phones.getProviders();
 
// Get Prefixes
const prefixes: Array<string> = phones.getPrefixes();
 
// Get Provider from Phone Number
const provider: string = phones.getProviderFromPhoneNumber('0904050607');
// => Mobifone - empty string if cannot find provider
```

### Sports

```ts
import { sports } from 'vnapis';
 
// Get Basketball Clubs
const basketballClubs = await sports.getBasketballClubs();
 
// Get Football Clubs
const footballClubs = await sports.getFootballClubs();
 
// Get Futsal Clubs
const futsalClubs = await sports.getFutsalClubs();
```

## Other Libraries

- [onepay](https://www.npmjs.com/package/onepay)
- [vietnambanks](https://www.npmjs.com/package/vietnambanks)
- [vietnamnews](https://www.npmjs.com/package/vietnamnews)
- [vnpay](https://www.npmjs.com/package/vnpay)
- [vtcpay](https://www.npmjs.com/package/vtcpay)
