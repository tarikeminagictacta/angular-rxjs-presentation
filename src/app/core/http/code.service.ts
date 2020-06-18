import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CodeService {
  constructor(private httpClient: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    responseType: 'text',
  };

  getCode(fileName: string) {
    return this.httpClient.get(`./api/code-examples/${fileName}`, { responseType: 'text' });
  }
}
