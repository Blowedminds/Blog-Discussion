import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as Echo from 'laravel-echo'
import * as io from 'socket.io-client'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MainService }  from './main.service'
import { ApiService } from './api.service'
import { environment } from '../../environments/environment'

import { Observable } from 'rxjs';

@Injectable()
export class ChatService extends MainService {

  public echo: any;

  public echoConnected$ = new BehaviorSubject<boolean>(false);

  constructor(
    http: HttpClient,
    api: ApiService
  ) {
    super(http, api);

    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: environment.socket.baseUrl,
    });
  }

  getRoomMessages(): Observable<any>
  {
    return this.http.get(this.makeUrl('messages'), {
      headers: this.headers,
      params: {
        token: this.getToken()
      }
    })
  }
}
