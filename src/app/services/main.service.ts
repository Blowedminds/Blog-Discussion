import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiService } from './api.service'

import { environment } from '../../environments/environment'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'

declare var swal;

@Injectable()
export class MainService {

  protected MAIN_URI: string = environment.apiUrl;

  protected API_URL: string = "discuss/";

  protected USER_API_URL: string = "user/";

  protected AUTH_API_URL: string = "auth/"

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })

  constructor(
    protected http: HttpClient,
    protected api: ApiService
  )
  {

  }

  protected getToken(): string
  {
    return this.api.getToken()
  }


  protected makeUrl(url: string): string
  {
    return this.MAIN_URI + this.API_URL + url
  }

  protected handleError(error: any, router: any = null): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only

    let jsError =  error

    switch (error.status){
      case 202:

        break;
      case 404:

        break;
      case 401:
        switch (jsError.statusText){
          case 'token_expired':
            this.api.navigate(['auth/login']);
            break;
          case 'token_invalid':
            this.api.navigate(['auth/login']);
            break;
          case 'token_not_provided':
            this.api.navigate(['auth/login']);
            break;
          case 'Unauthorized':
            this.api.navigate(['auth/login']);
            break;
        }
        break;
      case 421:
        if(jsError.pop_up){

          swal({
            title: jsError.header,
            text: jsError.message,
            type: jsError.state,
            timer: 2000
          }).then(() => {

            this.api.navigate([jsError.link])
          }, (dismiss) => {

            this.api.navigate([jsError.link])
          })
        }else this.api.navigate([jsError.link])
        break;
      case 422:
      break;
    }
    return Promise.reject(error.message || error);
  }
}
