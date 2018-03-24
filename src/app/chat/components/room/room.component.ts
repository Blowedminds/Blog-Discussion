import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CacheService } from '../../imports';
import { ChatService } from '../../services/chat.service';
import { ChatRequestService } from '../../services/chat-request.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  article: any;

  messages: Array<any> = [];

  slug: string;

  user: any;

  rooms: any;

  reconnect: any;

  subs = new Subscription()

  constructor(
    private chatRequestService: ChatRequestService,
    private chatService: ChatService,
    private cacheService: CacheService,
    private activatedRoute: ActivatedRoute
  )
  {
    this.cacheService.get('user', chatRequestService.makeGetRequest('user.info'))
                      .subscribe( user => this.user = user)

    this.cacheService.get('rooms', chatRequestService.makeGetRequest('chat.rooms'))
                      .subscribe(response => this.rooms = response)
  }

  ngOnInit() {

    let rq1 = this.activatedRoute.params.switchMap( (params: Params) => {

      if(this.slug)
        this.chatService.echo.leave(this.slug);

      if(this.reconnect)
        this.reconnect.removeListener();

      this.messages = null;

      this.slug = params['slug'];

      this.reconnect = this.chatService.echo.connector.socket.on('reconnect', () => {

          let rq1 = this.chatRequestService.getRoomMessages(params['slug']).subscribe( response => {

            this.messages = response.room.messages;

            rq1.unsubscribe();
          })
      })

      return this.chatRequestService.getRoomMessages(params['slug'])
    }).subscribe( (response: any) => {

      this.article = response;

      this.messages = response.room.messages;

      this.chatService.echo.channel('article.' + this.slug)
                           .listen('.message.created', message => this.pushMessage(message))
                           .listen('.message.deleted', message => this.deleteMessage(message.id));
    });

    this.subs.add(rq1);
  }

  ngDestroy()
  {
    this.subs.unsubscribe()
  }

  pushMessage(message: any)
  {
    if(!this.messages || this.messages.length === 0) {
      this.messages = [[message]]

      return;
    }

    let lastItem = this.messages[this.messages.length - 1];

    if(lastItem[0].user_id == message.user_id) {
      lastItem.push(message)
    }
    else {
      this.messages.push([message])
    }
  }

  deleteMessage(message_id: number)
  {
    let indexIn = -1;

    let index = this.messages.findIndex( user_message => (indexIn = user_message.findIndex( msg => msg.id === message_id)) > -1)

    if(index > -1 && indexIn > -1){
      this.messages[index].splice(indexIn, 1);

      if(this.messages[index].length == 0)
        this.messages.splice(index, 1);
    }

  }
}
