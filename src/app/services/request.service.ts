import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MainService }  from './main.service'
import { ApiService } from './api.service'

import { Observable } from 'rxjs';

@Injectable()
export class RequestService extends MainService {

  private options: any;

  constructor(
    protected http: HttpClient,
    protected api: ApiService
  )
  {
    super(http, api);

    this.options = {
      headers: this.headers,
      params: {
        token: null
      }
    }
  }

  getRooms(): Observable<any>
  {
    this.updateToken()

    return this.http.get(this.makeUrl('rooms'), this.options)
                    .catch(error => this.handleError(error))
  }

  getRoomMessages(slug: string): Observable<any>
  {
    this.updateToken()

    return this.http.get(this.makeUrl(slug + '/messages'), this.options)
                    .catch(error => this.handleError(error))
  }

  sendMessage(slug: string, form: any): Observable<any>
  {
    this.updateToken()

    return this.http.put(this.makeUrl(slug + '/message'), JSON.stringify(form),this.options)
                    .catch(error => this.handleError(error))
  }

  updateToken()
  {
    this.options.params.token = this.api.getToken()
  }
}
