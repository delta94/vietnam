# VIETNAM APIS

A Node.js API Wrapper Library for [Vietnam APIs](https://hieudoanm.github.io/vietnam/#/).

If you've found an bug/issue, please [send me an email](mailto:hieumdoan@gmail.com).

If you enjoyed this project — or just feeling generous, consider [buying me a beer](https://www.paypal.com/paypalme/hieudoanm/). Cheers! 🍻

- [VIETNAM APIS](#vietnam-apis)
  - [Installation](#installation)
  - [APIs](#apis)
    - [Administrative Divisions](#administrative-divisions)
    - [Banks](#banks)
    - [Calendar](#calendar)
    - [Ethnic Minorities](#ethnic-minorities)
    - [Finance](#finance)
    - [Government](#government)
    - [License Plates](#license-plates)
    - [Music](#music)
    - [Phones](#phones)
    - [Sports](#sports)
    - [VNLTK](#vnltk)
  - [Other Libraries](#other-libraries)

## Installation

```sh
npm install vnapis
## OR 
yarn add vnapis
```

## APIs

### Administrative Divisions

```ts
import { administrativeDivisions } from 'vnapis';
 
// Get Marco Regions
const marcoRegions: Array<any> = await administrativeDivisions.getMarcoRegions();
 
// Get Regions
const regions: Array<any> = await administrativeDivisions.getRegions();
 
// Get Postal Codes
const postalCodes: Array<any> = await administrativeDivisions.getPostalCodes();
 
// Get Provinces
const provinces: Array<any> = await administrativeDivisions.getProvinces();
 
// Get Districts
const province_id: string = 'ha-noi';
const districts: Array<any> = await administrativeDivisions.getDistricts(province_id);
 
// Get Wards
const skip: number = 0;
const limit: number = 100;
const wards: Array<any> = await administrativeDivisions.getWards(skip, limit);
```

### Banks

```ts
import { banks } from 'vnapis';

// Get Banks
const _banks = await banks.getBanks();
```

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

### Finance

```ts
import { finance } from 'vnapis';

// Get Listed Companies
const listedCompanies = await finance.getListedCompanies();
```

### Government

```ts
import { government } from 'vnapis';

// Get National Assembly Members
const nationalAssemblyMembers = await government.getNationalAssemblyMembers(14); // options: from 1 to 14 - default 14

// Get Ministries
const ministries = await government.getMinistries();

// Get Incumbents
const incumbents = await government.getIncumbents();

// Get General Secretaries
const generalSecretaries = await government.getGeneralSecretaries();

// Get Presidents
const presidents = await government.getPresidents();

// Get Prime Ministers
const primeMinisters = await government.getPrimeMinisters();

// Get National Assembly Chairs
const nationalAssemblyChairs = await government.getNationalAssemblyChairs();

// Get Ethnic Minority Affairs Leaders
const ethnicMinorityAffairsLeaders = await government.getEthnicMinorityAffairsLeaders();

// Get Government Inspectorate Leaders
const governmentInspectorateLeaders = await government.getGovernmentInspectorateLeaders();

// Get Government Office Leaders
const governmentOfficeLeaders = await government.getGovernmentOfficeLeaders();

// Get State Bank Governors
const stateBankGovernors = await government.getStateBankGovernors();

// Get Agriculture and Rural Development Ministers
const ministers = await government.getAgricultureRuralDevelopmentMinisters();

// Get Construction Ministers
const ministers = await government.getConstructionMinisters();

// Get Culture, Sports and Tourism Ministers
const ministers = await government.getCultureSportsTourismMinisters();

// Get Education and Training Ministers
const ministers = await government.getEducationTrainingMinisters();

// Get Finance Leaders
const ministers = await government.getFinanceMinisters();

// Get Foreign Affairs Ministers
const ministers = await government.getForeignAffairsMinisters();

// Get Health Ministers
const ministers = await government.getHealthMinisters();

// Get Home Affairs Ministers
const ministers = await government.getHomeAffairsMinisters();

// Get Industry and Trade Ministers
const ministers = await government.getIndustryTradeMinisters();

// Get Information and Communications Ministers
const ministers = await government.getInformationCommunicationsMinisters();

// Get Justice Ministers
const ministers = await government.getJusticeMinisters();

// Get Labour - Invalids and Social Affairs Leaders
const ministers = await government.getLabourInvalidsSocialAffairsMinisters();

// Get National Defence Ministers
const ministers = await government.getNationalDefenceMinisters();

// Get Natural Resources and Environment Ministers
const ministers = await government.getNaturalResourcesEnvironmentMinisters();

// Get Planning and Investment Ministers
const ministers = await government.getPlanningInvestmentMinisters();

// Get Public Security Ministers
const ministers = await government.getPublicSecurityMinisters();

// Get Science and Technology Leaders
const ministers = await government.getScienceTechnologyMinisters();

// Get Transport Ministers
const ministers = await government.getTransportMinisters();
```

### License Plates

```ts
import { licensePlates } from 'vnapis';

// Get License Plates
const plates = await licensePlates.getLicensePlates();
```

### Music

```ts
import { music } from 'vnapis';

// Get Artists
const artists = await music.getArtists();
```

### Phones

```ts
import { phones } from 'vnapis';
 
// Get Providers
const providers: Array<any> = await phones.getProviders();
 
// Get Prefixes
const prefixes: Array<any> = await phones.getPrefixes();
 
// Get Provider from Phone Number
const provider: string = await phones.getProviderFromPhoneNumber('0904050607');
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

### VNLTK

```ts
import { vnltk } from 'vnapis';

// Convert Number to Text
const text = vnltk.convertNumberToText(1995); // một nghìn chín trăm chín mươi lăm

// Convert Vietnamese into Latin Characters
const result = await vnltk.latinize('Việt Nam'); // Viet Nam

// Get proverbs
const proverbs = vnltk.getProverbs();

// Get names
const names = vnltk.getNames();

// Get first names
const firstNames = vnltk.getFirstNames();

// Get family names
const familyNames = vnltk.getFamilyNames();

// Get stop words
const stopWords = vnltk.getStopWords();

// Get words
const words = vnltk.getWords();
```

## Other Libraries

- [giaohangnhanh](https://www.npmjs.com/package/giaohangnhanh)
- [onepay](https://www.npmjs.com/package/onepay)
- [vietnambanks](https://www.npmjs.com/package/vietnambanks)
- [vietnamnews](https://www.npmjs.com/package/vietnamnews)
- [vnpay](https://www.npmjs.com/package/vnpay)
- [vtcpay](https://www.npmjs.com/package/vtcpay)