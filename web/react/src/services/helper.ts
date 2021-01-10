export default class Helper {
  public capitalize(s: string = ''): string {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  public addZero(x: number = 0): string {
    return x > 9 ? x.toString() : `0${x}`;
  }

  public numberFormatter(x: number = 0): string {
    return x
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  public processPeriod(period: string): any {
    const now = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    const oneYear = oneDay * 365;
    const oneMonth = oneDay * 30;
    const oneWeek = oneDay * 7;
    let unit = oneWeek;
    if (period.includes('Y')) {
      unit = oneYear;
    } else if (period.includes('M')) {
      unit = oneMonth;
    } else if (period.includes('W')) {
      unit = oneWeek;
    }

    const time = parseInt(period[0]) || 2;
    const from = now - unit * time;

    return { from, to: now };
  }

  public deepClone(o: any = {}): any {
    return JSON.parse(JSON.stringify(o));
  }

  public copyToClipboard(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((err: Error) => {
        alert(`Error in copying text: ${err.stack}`);
      });
  }
}
