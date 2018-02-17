import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as Echo from 'laravel-echo'
import * as io from 'socket.io-client'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MainService, ApiService }  from '../exports/services'

import { environment } from '../../environments/environment'

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService extends MainService {

  public echo: any;

  private _rooms: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    http: HttpClient,
    api: ApiService,
  ) {
    super(http, api);

    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: environment.socket.baseUrl,
    });

    this.echo.connector.connect()

    // console.log(this.echo.socketId())
    //
    // this.options.headers['X-Socket-ID'] = this.echo.socketId()

    let rq1 = this.getRooms().subscribe(response => {

      this.rooms = response

      rq1.unsubscribe();
    })
  }

  getRooms(): Observable<any>
  {
    return this.http.get(this.makeUrl('rooms'), this.options)
                    .catch(error => this.handleError(error));
  }


  getRoomMessages(slug: string): Observable<any>
  {
    return this.http.get(this.makeUrl('room/' + slug + '/messages'), this.options)
                    .catch(error => this.handleError(error));
  }

  get rooms()
  {
    return this._rooms.asObservable()
  }

  set rooms(value)
  {
    this._rooms.next(value)
  }
}
