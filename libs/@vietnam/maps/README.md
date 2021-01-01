# Vietnam Maps

## Installation

```sh
npm install @vietnam/maps
# OR
yarn add @vietnam/maps
```

## Usage

```ts
import maps from '@vietnam/maps';

// Get Regions
const regions = maps.getRegions();

// Get Subregions
const subregions = maps.getSubregions();

// Get Provinces
const provinces = maps.getProvinces();

// Get Province by License Plate
const province = maps.getProvinceByLicensePlate(29); // Hà Nội

// Get Districts
const districts = maps.getDistricts();

// Get Wards
const wards = maps.getWards();

// Get License Plates
const licensePlates = maps.getLicensePlates();

// Get Postal Codes
const postalCodes = maps.getPostalCodes();

// Get Places
const places = maps.getPlaces();
// OR (Get Bars)
const bars = maps.getPlaces('bar');
// OR (Get Cafes)
const cafes = maps.getPlaces('cafe');
// OR (Get Universities)
const universities = maps.getPlaces('university');
// OR (Get Hospitals)
const hospitals = await maps.getPlaces('hospital');
```
