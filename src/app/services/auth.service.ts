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
                    .get(url, this.options)

  }

  register(data: any): Observable<any>
  {
    const url = this.makeUrl('register');

    return this.http
                    .put(url, JSON.stringify(data), this.options)
  }

  login(data: any): Observable<any>
  {
    const url = this.makeUrl('login');

    return this.http
                    .post(url, JSON.stringify(data), this.options)
  }

  logout(): Observable<any>
  {
    const url = this.makeUrl('logout');

    return this.http
                    .get(url, this.options)
                    .catch(error => this.handleError(error))
  }

  makeUrl(url: string): string
  {
    return this.MAIN_URI + this.AUTH_API_URL + url;
  }
}
