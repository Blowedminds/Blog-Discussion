import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { MainRequestService, RoutingListService, HelpersService } from '../imports';

@Injectable()
export class ChatRequestService extends MainRequestService {

  constructor(
    http: HttpClient,
    helpersService: HelpersService,
    routingListService: RoutingListService
  ) {
    super(http, helpersService, routingListService);

  }

  putMessage(slug: string, form: any): Observable<any> {
    return this.makePutRequest('chat.room', form, `${slug}/message`);
  }

  deleteMessage(message_id: number): Observable<any> {
    return this.makeDeleteRequest('chat.message', `${message_id}`);
  }

  getRooms(): Observable<any> {
    return this.makeGetRequest('chat.rooms');
  }

  getRoomMessages(slug: string): Observable<any> {
    return this.makeGetRequest('chat.room', `${slug}/messages`);
  }

}
