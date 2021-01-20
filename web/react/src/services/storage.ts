export default class Storage {
  public set(key: string, value: any): void {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value.toString());
    }
  }

  public get(key: string): any {
    return localStorage.getItem(key) || '';
  }
}
