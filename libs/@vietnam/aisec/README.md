# AISEC

## Installation

```sh
npm install aisec
# OR
yarn add aisec
```

## Usage

[AISEC](https://www.aisec.com.vn/)

```ts
import { aisec } from 'vnapis';

// Get Stock Markets
const markets = aisec.getMarkets();

// Get HNX30 Codes
const codes = aisec.getHNX30();

// Get VN30 Markets
const codes = aisec.getVN30();

// Get Top News
const articles = aisec.getTopNews();

// Get Base Commodities
const baseCommodities = aisec.getBaseCommodities();

// Get World Indexes
const indexes = aisec.getWorldIndexes();

// Get Listed Companies
const listedCompanies = aisec.getListedCompanies();
// OR
const listedCompanies: Array<any> = aisec.getListedCompanies('hnx'); // hnx - hose - upcom

// Get Stock Data
const data = aisec.getStockData();
// OR
const codes: Array<string> = ['ACB', 'SHB', 'PVS', 'VGC', 'VCS',]
const data = aisec.getStockData(codes);
```
