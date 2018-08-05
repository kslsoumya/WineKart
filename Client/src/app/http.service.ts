import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpParams, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl = 'http://localhost:3000';

  constructor(public _http: HttpClient, public cookieService: CookieService) { }

  public signUp(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password);
    return (this._http.post(`${this.baseUrl}/api/v1/users/signup`, params));
  }

  public signIn(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
    return (this._http.post(`${this.baseUrl}/api/v1/users/login`, params));
  }


  public pwdService = (data) => {
    return this._http.put(`${this.baseUrl}/api/v1/users/forgotPwd`, data);
  }

  public getAllProducts = () => {
    return this._http.get(`${this.baseUrl}/api/v1/wines/get/all?authToken=${this.cookieService.get('authToken')}`);
  }

  public getProductByCountry = (name) => {
    return this._http.get(`${this.baseUrl}/api/v1/wines/get/country/${name}?authToken=${this.cookieService.get('authToken')}`);
  }

  public getProductByRegion1 = (name) => {
    return this._http.get(`${this.baseUrl}/api/v1/wines/get/region_1/${name}?authToken=${this.cookieService.get('authToken')}`);
  }

  public getProductByRegion2 = (name) => {
    return this._http.get(`${this.baseUrl}/api/v1/wines/get/region_2/${name}?authToken=${this.cookieService.get('authToken')}`);
  }

  public getProductByProvince = (name) => {
    return this._http.get(`${this.baseUrl}/api/v1/wines/get/province/${name}?authToken=${this.cookieService.get('authToken')}`);
  }

  public getProductByVariety = (name) => {
    return this._http.get(`${this.baseUrl}/api/v1/wines/get/variety/${name}?authToken=${this.cookieService.get('authToken')}`);
  }

  public logOutFunction(): Observable<any> {
    const params = new HttpParams()
      .set('authToken', this.cookieService.get('authToken'));
    return (this._http.post(`${this.baseUrl}/api/v1/users/logout`, params));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    } // end condition *if
    console.error(errorMessage);
    return Observable.throw(errorMessage);

  }
}
