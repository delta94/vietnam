# SohaPay

## Installation

```sh
npm install vietnamgovernment
# OR
yarn add vietnamgovernment
```

## Usage

```ts
import vngov from 'vietnamgovernment';

// Get National Assembly Members
const nationalAssemblyMembers = vngov.getNationalAssemblyMembers(14); // options: from 1 to 14 - default 14

// Get Ethnic Minorities
const ethnicMinorities = vngov.getEthnicMinorities();

// Get Ministries
const ministries = vngov.getMinistries();

// Get Incumbents
const incumbents = vngov.getIncumbents();

// Get General Secretaries
const generalSecretaries = vngov.getGeneralSecretaries();

// Get Presidents
const presidents = vngov.getPresidents();

// Get Prime Ministers
const primeMinisters = vngov.getPrimeMinisters();

// Get National Assembly Chairs
const nationalAssemblyChairs = vngov.getNationalAssemblyChairs();

// Get Ethnic Minority Affairs Leaders
const ethnicMinorityAffairsLeaders = vngov.getEthnicMinorityAffairsLeaders();

// Get Government Inspectorate Leaders
const governmentInspectorateLeaders = vngov.getGovernmentInspectorateLeaders();

// Get Government Office Leaders
const governmentOfficeLeaders = vngov.getGovernmentOfficeLeaders();

// Get State Bank Governors
const stateBankGovernors = vngov.getStateBankGovernors();

// Get Agriculture and Rural Development Ministers
const ministers = vngov.getAgricultureRuralDevelopmentMinisters();

// Get Construction Ministers
const ministers = vngov.getConstructionMinisters();

// Get Culture, Sports and Tourism Ministers
const ministers = vngov.getCultureSportsTourismMinisters();

// Get Education and Training Ministers
const ministers = vngov.getEducationTrainingMinisters();

// Get Finance Leaders
const ministers = vngov.getFinanceMinisters();

// Get Foreign Affairs Ministers
const ministers = vngov.getForeignAffairsMinisters();

// Get Health Ministers
const ministers = vngov.getHealthMinisters();

// Get Home Affairs Ministers
const ministers = vngov.getHomeAffairsMinisters();

// Get Industry and Trade Ministers
const ministers = vngov.getIndustryTradeMinisters();

// Get Information and Communications Ministers
const ministers = vngov.getInformationCommunicationsMinisters();

// Get Justice Ministers
const ministers = vngov.getJusticeMinisters();

// Get Labour - Invalids and Social Affairs Leaders
const ministers = vngov.getLabourInvalidsSocialAffairsMinisters();

// Get National Defence Ministers
const ministers = vngov.getNationalDefenceMinisters();

// Get Natural Resources and Environment Ministers
const ministers = vngov.getNaturalResourcesEnvironmentMinisters();

// Get Planning and Investment Ministers
const ministers = vngov.getPlanningInvestmentMinisters();

// Get Public Security Ministers
const ministers = vngov.getPublicSecurityMinisters();

// Get Science and Technology Leaders
const ministers = vngov.getScienceTechnologyMinisters();

// Get Transport Ministers
const ministers = vngov.getTransportMinisters();
```
