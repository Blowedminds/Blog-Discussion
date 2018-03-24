import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MainRequestService, RoutingListService, HelpersService } from '../imports';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatRequestService extends MainRequestService{

  constructor(
    http: HttpClient,
    helpersService: HelpersService,
    routingListService: RoutingListService
  )
  {
    super(http, helpersService, routingListService);

  }

  putMessage(slug: string, form: any): Observable<any>
  {
    const url = this.makeUrl('chat.room', `${slug}/message`);

    return this.http.put(url, JSON.stringify(form),this.options)
                     .catch(error => this.handleError(error));
  }

  deleteMessage(message_id: number): Observable<any>
  {
    const url = this.makeUrl('chat.message', `${message_id}`);

    return this.http.delete(url, this.options)
                     .catch(error => this.handleError(error));
  }

  getRooms(): Observable<any>
  {
    const url = this.makeUrl('chat.rooms');

    return this.http.get(url, this.options)
                    .catch(error => this.handleError(error));
  }


  getRoomMessages(slug: string): Observable<any>
  {
    const url = this.makeUrl('chat.room', `${slug}/messages`);

    return this.http.get(url, this.options)
                    .catch(error => this.handleError(error));
  }

}
