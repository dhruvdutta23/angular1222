import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  resData: any = [];
  networkError = '';
  constructor(private http: HttpClient) { }
  get(url: string) {
    this.http.get(url).subscribe((res: any) => this.resData = 'test'
      , error => this.networkError = error.message);
      return {resData: this.resData, networkError: this.networkError};
  }
}
