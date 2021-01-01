'use strict';

import configs from './configs';

class VNLTK {
  private specialCharacters: Array<any> = configs.specialCharacters;
  private numberText: any = configs.numberText;

  private proverbs: Array<any> = configs.proverbs;

  private names: Array<string> = configs.names;
  private familyNames: Array<string> = configs.familyNames;
  private firstNames: Array<string> = configs.firstNames;

  private stopWords: Array<string> = configs.stopWords;
  private words: Array<string> = configs.words;

  public getWords(): Array<string> {
    return this.words;
  }

  public getStopWords(): Array<string> {
    return this.stopWords;
  }

  public getNames(): Array<string> {
    return this.names;
  }

  public getFamilyNames(): Array<string> {
    return this.familyNames;
  }

  public getFirstNames(): Array<string> {
    return this.firstNames;
  }

  public getProverbs(): Array<any> {
    return this.proverbs;
  }

  public latinize(text: string = ''): string {
    let result = text || '';
    for (const item of this.specialCharacters) {
      result = result.replace(item.regex, item.character);
    }
    return result;
  }
  /**
   * Convert number to text
   */

  private getTen(number: any = 0): string {
    const self = this;
    const {
      numberText: { base, baseTen }
    } = self;
    let [first, second] = `${number}`.split('').map(n => parseInt(n, 10));
    if (second === 0) return baseTen[first - 1];
    if (second === 4) return `${baseTen[first - 1]} tư`;
    if (second === 5) return `${baseTen[first - 1]} lăm`;
    if (second === 1 && first === 1) return `${baseTen[first - 1]} một`;
    if (second === 1) return `${baseTen[first - 1]} mốt`;
    return `${baseTen[first - 1]} ${base[second]}`;
  }

  private getHundred(number: any = 0): string {
    const self = this;
    const {
      numberText: { base, baseHundred }
    } = self;
    const [first, second, third] = `${number}`.split('').map(n => parseInt(n, 10));
    if (second > 0) return `${baseHundred[first]} ${self.getTen(`${second}${third}`)}`;
    if (third === 0) return `${baseHundred[first]}`;
    if (third === 4) return `${baseHundred[first]} linh tư`;
    return `${baseHundred[first]} linh ${base[third]}`;
  }

  private getThousand(number: any = 0): string {
    const self = this;
    const {
      numberText: { base }
    } = self;
    const n: string = number.toString().trim();
    const hundredDigits: string = n.substr(n.length - 3);
    const thousandDigits: string = n.substring(0, n.length - 3);
    const firstNumber: number = parseInt(thousandDigits, 10);

    const tailText = parseInt(hundredDigits) > 1 ? self.getHundred(hundredDigits) : '';

    if (thousandDigits.length === 1) return `${base[firstNumber]} nghìn ${tailText}`;
    if (thousandDigits.length === 2) return `${self.getTen(firstNumber)} nghìn ${tailText}`;
    return `${self.getHundred(firstNumber)} nghìn ${tailText}`;
  }

  private getMillion(number: any = 0): string {
    const self = this;
    const {
      numberText: { base }
    } = self;
    const n: string = number.toString().trim();

    const hundredDigits: string = n.substr(n.length - 3);
    const thousandDigits: string = n.substring(n.length - 6, n.length - 3);
    const tailDigits = `${thousandDigits}${hundredDigits}`;

    const millionDigits: string = n.substring(0, n.length - 6);
    const millionNumbers: number = parseInt(millionDigits, 10);

    let tailText = '';
    if (parseInt(tailDigits) > 999) {
      tailText = self.getThousand(tailDigits);
    } else if (parseInt(tailDigits) <= 999 && parseInt(tailDigits) >= 1) {
      tailText = self.getHundred(hundredDigits);
    }

    if (millionDigits.length === 1) return `${base[millionNumbers]} triệu ${tailText}`;
    if (millionDigits.length === 2) return `${self.getTen(millionNumbers)} triệu ${tailText}`;
    return `${self.getHundred(millionNumbers)} triệu ${tailText}`;
  }

  private getBillion(number: any): string {
    const self = this;
    const {
      numberText: { base }
    } = self;
    const n: string = number.toString().trim();

    const hundredDigits: string = n.substr(n.length - 3);
    const thousandDigits: string = n.substring(n.length - 6, n.length - 3);
    const millionDigits: string = n.substring(n.length - 9, n.length - 6);
    const tailDigits = `${millionDigits}${thousandDigits}${hundredDigits}`;

    const billionDigits: string = n.substring(0, n.length - 9);
    const billionNumber: number = parseInt(billionDigits, 10);

    let tailText = '';
    if (parseInt(tailDigits) > 999999 && parseInt(tailDigits) <= 999999999) {
      tailText = self.getMillion(tailDigits);
    } else if (parseInt(tailDigits) <= 999999 && parseInt(tailDigits) > 999) {
      tailText = self.getThousand(`${thousandDigits}${hundredDigits}`);
    } else if (parseInt(tailDigits) <= 999 && parseInt(tailDigits) >= 1) {
      tailText = self.getHundred(`${hundredDigits}`);
    }

    const billionLength = billionDigits.length;
    if (billionLength === 1) return `${base[billionNumber]} tỷ ${tailText}`;
    if (billionLength === 2) return `${self.getTen(billionNumber)} tỷ ${tailText}`;
    if (billionLength === 3) return `${self.getHundred(billionNumber)} tỷ ${tailText}`;
    if (billionLength > 3 && billionLength <= 6)
      return `${self.getThousand(billionNumber)} tỷ ${tailText}`;
    if (billionLength > 6 && billionLength <= 9)
      return `${self.getMillion(billionNumber)} tỷ ${tailText}`;
    if (billionLength > 9) return `${self.getBillion(billionNumber)} tỷ ${tailText}`;
  }

  public convertNumberToText(number: number = 0): string {
    if (isNaN(number)) return 'ko phải là số';
    if (!Number.isInteger(number)) return 'cho xin số nguyên';
    if (!Number.isSafeInteger(number)) return 'số lớn quá';
    const n = Math.abs(number);
    const length = `${n}`.length;
    if (length === 1) return this.numberText.base[n];
    if (length === 2) return this.getTen(n);
    if (length === 3) return this.getHundred(n);
    if (length > 3 && length <= 6) return this.getThousand(n);
    if (length > 6 && length <= 9) return this.getMillion(n);
    if (length > 9) return this.getBillion(n);
    return '';
  }
}

const vnltk: VNLTK = new VNLTK();

export default vnltk;
