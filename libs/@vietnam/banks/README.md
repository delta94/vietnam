# Vietnam Banks

[![version][npm-image-version]][npm-url]
[![downloads][npm-image-download]][npm-url]

## Installation

```sh
npm install vietnambanks
# OR
yarn add vietnambanks
```

## Exammple

```ts
import vnb from 'vietnambanks';

// Get Banks
const banks: Array<any> = await vnb.getBanks();

// Get Forex Banks
const banks: Array<any> = await vnb.getForexBanks();

// Get Forex Rates
const rates: Array<any> = await vnb.getForexRates();

// Get Forex Rates by Bank ID
const rates: Array<any> = await vnb.getForexRatesByBank('vietcombank');
```

## (Forex) Banks

| no  | id               | name                                                        |
| --- | ---------------- | ----------------------------------------------------------- |
| 01  | acb              | [ACB](https://acb.com.vn/)                                  |
| 02  | agribank         | [Agribank](https://www.agribank.com.vn/)                    |
| 03  | bidv             | [BIDV](https://www.bidv.com.vn/)                            |
| 04  | cbbank           | [Construction Bank](https://www.cbbank.vn)                  |
| 05  | dongabank        | [DongABank](https://www.dongabank.com.vn/)                  |
| 06  | eximbank         | [Eximbank](https://www.eximbank.com.vn/)                    |
| 07  | gpbank           | [Global Petro Bank](https://www.gpbank.com.vn)              |
| 08  | hdbank           | [HDBank](https://www.hdbank.com.vn/)                        |
| 09  | kienlongbank     | [Kien Long Bank](https://kienlongbank.com/)                 |
| 10  | lienvietpostbank | [Lien Viet Post Bank](https://www.lienvietpostbank.com.vn/) |
| 11  | msb              | [MSB](https://www.msb.com.vn/)                              |
| 12  | namabank         | [NamABank](https://namabank.com.vn/)                        |
| 13  | ocb              | [OCB](https://www.ocb.com.vn/)                              |
| 14  | oceanbank        | [Oceanbank](https://oceanbank.vn/)                          |
| 15  | sacombank        | [Sacombank](https://www.sacombank.com.vn/)                  |
| 16  | saigonbank       | [Sai Gon Bank](https://saigonbank.com.vn/)                  |
| 17  | seabank          | [SeABank](https://www.seabank.com.vn/)                      |
| 18  | scb              | [SCB](https://www.scb.com.vn/)                              |
| 19  | shb              | [SHB](https://www.shb.com.vn/)                              |
| 20  | techcombank      | [Techcombank](https://www.techcombank.com.vn/)              |
| 21  | uob              | [UOB](https://www.uob.com.vn/)                              |
| 22  | vib              | [VIB](https://www.vib.com.vn/)                              |
| 23  | vietbank         | [VietBank](https://www.vietbank.com.vn/)                    |
| 24  | vietcapitalbank  | [Viet Capital Bank](https://www.vietcapitalbank.com.vn/)    |
| 25  | vietcombank      | [Vietcombank](https://portal.vietcombank.com.vn/)           |
| 26  | vietinbank       | [VietinBank](https://www.vietinbank.vn/)                    |
| 27  | vpbank           | [VPBank](https://www.vpbank.com.vn/)                        |

[npm-url]: https://www.npmjs.com/package/vietnambanks
[npm-image-version]: https://img.shields.io/npm/v/vietnambanks.svg?style=flat
[npm-image-download]: https://img.shields.io/npm/dm/vietnambanks.svg?style=flat
