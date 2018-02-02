import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { MainService }  from './main.service'
import { ApiService } from './api.service'

import { Observable }     from 'rxjs';

@Injectable()
export class AuthService extends MainService{

  constructor(
    http: HttpClient,
    api: ApiService
  )
  {
    super(http, api)
  }

  checkAuthenticated(): Observable<any>
  {
    const url = this.makeUrl('check')

    return this.http
                    .get(url, {headers: this.headers})

  }

  register(data: any): Observable<any>
  {
    const url = this.makeUrl('register');

    return this.http
                    .put(url, JSON.stringify(data), {headers: this.headers})
  }

  login(data: any): Observable<any>
  {
    const url = this.makeUrl('login');

    return this.http
                    .post(url, JSON.stringify(data), {headers: this.headers})
  }

  logout(): Observable<any>
  {
    const url = this.makeUrl('logout');

    return this.http
                    .get(url, {headers: this.headers})
                    .catch(error => this.handleError(error))
  }

  makeUrl(url: string): string
  {
    return this.MAIN_URI + this.AUTH_API_URL + url;
  }
}
