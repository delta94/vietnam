'use strict';

import * as fs from 'fs';
import * as request from 'request';
import * as csvToJSON from 'csvtojson';

export default class Utils {
  public median(arr: Array<number> = []): number {
    const arrSort = arr.sort();
    const len = arr.length;
    const mid = Math.ceil(len / 2);
    const median = len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    return parseFloat(median.toFixed(2));
  }

  public isObjectEmpty(object: any = {}): boolean {
    return Object.keys(object).length === 0 && object.constructor === Object;
  }

  public async waitFor(milliseconds: number = 0): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => resolve('DONE'), milliseconds);
    });
  }
  /**
   * Numbers
   */
  public addZero(i: number = 0): string {
    return i > 9 ? `${i}` : '0' + i.toString();
  }

  public numberFormatter(x: number = 0): string {
    const [whole, decimal] = x.toString().split('.');
    const updatedWhole: string = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimal ? `${updatedWhole}.${decimal}` : updatedWhole;
  }
  /**
   * JSON
   */
  public async convertCSVtoJSON(csvFilePath: string = '', jsonFilePath: string = ''): Promise<any> {
    const json: any = await csvToJSON().fromFile(csvFilePath);
    const jsonString: string = JSON.stringify(json, null, 2);
    if (jsonFilePath) await fs.writeFileSync(jsonFilePath, jsonString);
    return json;
  }
  /**
   * Time
   */
  public convertTimeToMilliseconds(time: number = 0, unit: string = ''): number {
    if (unit === 'seconds') return time * 1000;
    if (unit === 'minutes') return time * 1000 * 60;
    if (unit === 'hours') return time * 1000 * 60 * 60;
    if (unit === 'days') return time * 1000 * 60 * 60 * 24;
  }

  public async download(url: string = '', path: string = ''): Promise<any> {
    return new Promise((resolve, reject) => {
      request.head(url, (error, res) => {
        if (error) reject(error);
        if (!res) reject('res is undefined');
        if (!res.headers) reject('headers is undefined');

        const { headers = {} } = res;
        const type = headers['content-type'] || '';
        const length = headers['content-length'] || '';
        console.log('CONTENT-TYPE:', type);
        console.log('CONTENT-LENGTH:', length);

        if (!type) reject('content type is undefined');
        if (!length) reject('content length is undefined');

        request(url)
          .pipe(fs.createWriteStream(path))
          .on('close', error => {
            if (error) reject(error);
            resolve('DONE');
          });
      });
    });
  }

  public async convertJSONtoCSV(list: Array<any>, path: string = ''): Promise<string> {
    try {
      const [first = {}] = list;
      const headers: Array<string> = Object.keys(first);
      const header: string = headers.join(',');
      const rows: string = list
        .map(item => {
          const row: string = headers
            .map(header => {
              const cell: string = (item[header] || '').toString();
              return cell.includes(',') ? `"${cell.replace(/"/g, "'")}"` : cell;
            })
            .join(',');
          return row;
        })
        .join('\n');
      const data: string = `${header}\n${rows}`;
      if (path) await fs.writeFileSync(path, data);
      return data;
    } catch (error) {
      const message = error.stack;
      console.error(message);
      return '';
    }
  }

  detectBrowser(userAgent: string): string {
    if (userAgent.indexOf('Chrome') !== -1) {
      return 'Google Chrome';
    } else if (userAgent.indexOf('Firefox') !== -1) {
      return 'Mozilla Firefox';
    } else if (userAgent.indexOf('MSIE') !== -1) {
      return 'Internet Exploder';
    } else if (userAgent.indexOf('Edge') !== -1) {
      return 'Internet Exploder';
    } else if (userAgent.indexOf('Safari') !== -1) {
      return 'Safari';
    } else if (userAgent.indexOf('Opera') !== -1) {
      return 'Opera';
    } else if (userAgent.indexOf('YaBrowser') !== -1) {
      return 'YaBrowser';
    } else {
      return 'Others';
    }
  }
}
