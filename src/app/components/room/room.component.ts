import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RequestService, UserService, ChatService, GlobalDataService } from '../../exports/services'

import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit, AfterViewInit {

  article: any;

  messages: Array<any> = [];

  slug: string;

  user: any;

  rooms: any;

  subs = new Subscription()

  @ViewChild('chatMessage') chat_message: ElementRef;

  constructor(
    private requestServie: RequestService,
    private chatService: ChatService,
    private userService: UserService,
    private route: ActivatedRoute,
    private globalDataService: GlobalDataService
  )
  {
    this.chatService.echo.connector.connect()

    this.userService.userObs.subscribe( user => this.user = user)

    this.globalDataService.rooms.subscribe(response => this.rooms = response)
  }

  ngOnInit() {

    let rq1 = this.route.params.switchMap( (params: Params) => {

      if(this.slug)
        this.chatService.echo.leave(this.slug)

      this.messages = null;


      this.slug = params['slug'];

      return this.requestServie.getRoomMessages(params['slug'])
    }).subscribe( response => {

      this.article = response;

      this.messages = response.room.messages;

      console.log(this.chat_message)
      this.chatService.echo.channel(this.slug).listen('.new_message.created', message => this.pushMessage(message))
    });

    this.subs.add(rq1);
  }

  ngAfterViewInit()
  {
    console.log(this.chat_message)
  }

  ngDestroy()
  {
    this.subs.unsubscribe()

    this.chatService.echo.disconnect();
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

    let nativeElement = this.chat_message.nativeElement;

    console.log(`offset: ${nativeElement.offsetHeight} scrollHeight: ${nativeElement.scrollHeight} scrollTop: ${nativeElement.scrollTop}`)

    let scrollTo = this.chat_message.nativeElement.scrollHeight - this.chat_message.nativeElement.offsetHeight

    //this.chat_message.nativeElement.scrollTop = scrollTo
  }


}
