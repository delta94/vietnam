import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public async get(url: string, token: string = ''): Promise<any> {
    let headers = new HttpHeaders();
    if (token) headers = headers.set('x-token', token);
    return new Promise(resolve => {
      this.http.get(url, { headers }).subscribe(
        (res: any) => resolve(res),
        (error: Error) => {
          console.error(error);
          resolve({});
        }
      );
    });
  }

  public async post(url: string, body: Object, token: string = ''): Promise<any> {
    let headers = new HttpHeaders();
    if (token) headers = headers.set('x-token', token);
    return new Promise(resolve => {
      this.http.post(url, body, { headers }).subscribe(
        (res: any) => resolve(res),
        (error: Error) => {
          console.error(error);
          resolve({});
        }
      );
    });
  }

  public async put(url: string, body: Object, token: string = ''): Promise<any> {
    let headers = new HttpHeaders();
    if (token) headers = headers.set('x-token', token);
    return new Promise(resolve => {
      this.http.put(url, body, { headers }).subscribe(
        (res: any) => resolve(res),
        (error: Error) => {
          console.error(error);
          resolve({});
        }
      );
    });
  }

  public async patch(url: string, body: Object = {}, token: string = ''): Promise<any> {
    let headers = new HttpHeaders();
    if (token) headers = headers.set('x-token', token);
    return new Promise(resolve => {
      this.http.patch(url, body, { headers }).subscribe(
        (res: any) => resolve(res),
        (error: Error) => {
          console.error(error);
          resolve({});
        }
      );
    });
  }

  public async delete(url: string, body: Object, token: string = ''): Promise<any> {
    let headers = new HttpHeaders();
    if (token) headers = headers.set('x-token', token);
    return new Promise(resolve => {
      this.http.patch(url, body, { headers }).subscribe(
        (res: any) => resolve(res),
        (error: Error) => {
          console.error(error);
          resolve({});
        }
      );
    });
  }
}
