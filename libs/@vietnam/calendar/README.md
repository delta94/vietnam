# Vietnam (Lunar) Calendar

## Installation

```sh
npm install @vietnam/calendar
# OR
yarn add @vietnam/calendar
```

## Usage

```ts
import vncalendar from '@vietnam/calendar';

// Convert Solar to Lunar Date
const { date, month, year } = vncalendar.convertSolarToLunar(8, 8, 2020); // { date: 19, month: 6, year: 2020 }

// Convert Lunar to Solar Date
const { date, month, year } = vncalendar.convertLunarToSolar(19, 6, 2020); // { date: 8, month: 8, year: 2020 }

// List of Can
const listOfCan = vncalendar.getListOfCan();

// List of Chi
const listOfChi = vncalendar.getListOfChi();

// Get Can Chi of Lunar Year
const canChiOfYear = vncalendar.getCanChiOfYear(2020); // Canh Tý

// Get Can Chi of Lunar Month - Lunar Year
const canChiOfMonth = vncalendar.getCanChiOfMonth(6, 2020); // Quý Mùi

// Get Can Chi of Lunar Date - Lunar Month - Lunar Year
const canChiOfDate = vncalendar.getCanChiOfDate(19, 6, 2020); // Quý Mùi

// Check Solar Leap Year
const isSolarLeapYear = vncalendar.isSolarLeapYear(2020); // true

// Check Lunar Leap Year
const isLunarLeapYear = vncalendar.isLunarLeapYear(2020); // true
```
