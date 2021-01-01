# News

[![version][npm-image-version]][npm-url]
[![downloads][npm-image-download]][npm-url]

## Installation

```sh
npm install vietnamnews
# OR
yarn add vietnamnews
```

## Exammple

```ts
import vietnamnews from 'vietnamnews';

// Get News - Ariticles
const articles = await vietnamnews.getNews();
// OR
const articles = await vietnamnews.getNews({
  sources: ['dantri', 'vnexpress'], // list of source ids
  category: 'general'
});

// Get Sources
const sources = vietnamnews.getSources();

// Get Categories
const categories = await vietnamnews.getCategories();

// Get Google Trends
const trends = await vietnamnews.getGoogleTrends();
```

## Sources

| id            | name                                            | RSS                                          | category   |
| ------------- | ----------------------------------------------- | -------------------------------------------- | ---------- |
| cafebiz       | [CafeBiz](https://cafebiz.vn)                   | [RSS](https://cafebiz.vn/rss.chn)            | business   |
| dantri        | [Dân Trí](https://dantri.com.vn)                | [RSS](https://dantri.com.vn/rss.htm)         | general    |
| forbesvietnam | [Forbes Việt Nam](https://forbesvietnam.com.vn) | [RSS](https://forbesvietnam.com.vn/rss.html) | business   |
| laodong       | [Lao Động](https://laodong.vn)                  | [RSS](https://laodong.vn/rss)                | general    |
| nhandan       | [Nhân Dân](https://nhandan.com.vn)              | [RSS](https://en.nhandan.org.vn/rss)         | general    |
| soha          | [Soha](https://soha.vn)                         | [RSS](https://soha.vn/rss.htm)               | general    |
| thanhnien     | [Thanh Niên](https://thanhnien.vn)              | [RSS](https://thanhnien.vn/rss.html)         | general    |
| tinhte        | [Tinh Tế](https://tinhte.vn)                    | [RSS](https://tinhte.vn/rss)                 | technology |
| tuoitre       | [Tuổi Trẻ](https://tuoitre.vn)                  | [RSS](https://tuoitre.vn/rss.htm)            | general    |
| vietnamnet    | [VietNamNet](https://vietnamnet.vn)             | [RSS](https://vietnamnet.vn/vn/rss/)         | general    |
| vnexpress     | [VNExpress](https://vnexpress.net)              | [RSS](https://vnexpress.net/rss)             | general    |
| vtv           | [VTV](https://vtv.vn)                           | [RSS](https://vtv.vn/rss.htm)                | general    |

[npm-url]: https://www.npmjs.com/package/vietnamnews
[npm-image-version]: https://img.shields.io/npm/v/vietnamnews.svg?style=flat
[npm-image-download]: https://img.shields.io/npm/dm/vietnamnews.svg?style=flat
