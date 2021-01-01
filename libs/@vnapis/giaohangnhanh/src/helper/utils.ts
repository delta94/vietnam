'use strict';

class Utils {
  public convertObjectToQueryString(o: any): string {
    const keys = Object.keys(o);
    return keys
      .map(key => {
        const value: string = o[key].toString();
        return `${key}=${value}`;
      })
      .join('&');
  }
}

const utils: Utils = new Utils();

export default utils;
