import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MainService }  from './main.service'
import { ApiService } from './api.service'

import { Observable } from 'rxjs';

@Injectable()
export class RequestService extends MainService {

  constructor(
    protected http: HttpClient,
    protected api: ApiService
  )
  {
    super(http, api);
  }


  putMessage(slug: string, form: any): Observable<any>
  {
    return this.http.put(this.makeUrl('room/' + slug + '/message'), JSON.stringify(form),this.options)
                    .catch(error => this.handleError(error));
  }

  deleteMessage(message_id: number): Observable<any>
  {
    return this.http.delete(this.makeUrl('message/' + message_id), this.options)
                    .catch(error => this.handleError(error));
  }
}
