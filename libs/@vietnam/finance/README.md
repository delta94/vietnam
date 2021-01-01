# VIETNAM APIS

[![npm version][npm-image-version]][npm-url]
[![downloads][npm-image-download]][npm-url]
[![MIT License][license-image]][license-url]

[Node.js](https://nodejs.org/en/) client library for using [Vietnam](https://en.wikipedia.org/wiki/Vietnam) APIs.

If you've found an bug/issue, please [send me an email](mailto:hieumdoan@gmail.com).

If you enjoyed this project — or just feeling generous, consider [buying me a beer](https://paypal.me/hieudoanm/). Cheers! 🍻

- [VIETNAM APIS](#vietnam-apis)
  - [Installation](#installation)
  - [APIs](#apis)
    - [Finance](#finance)

## Installation

```sh
npm install vnapis
## OR
yarn add vnapis
```

## APIs

### Finance

```ts
import { finance } from 'vnapis';

// Get Banks
const banks: Array<any> = await finance.getBanks();

// Get Brokerage Companies
const brokerageCompanies: Array<any> = finance.getStockBrokerageCompanies();
```

[npm-image-version]: https://img.shields.io/npm/v/vnapis.svg?style=flat
[npm-image-download]: https://img.shields.io/npm/dm/vnapis.svg
[npm-url]: https://www.npmjs.com/package/vnapis
[license-image]: https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square
[license-url]: https://github.com/hieudoanm/hieudoanm/tree/master/LICENSE
