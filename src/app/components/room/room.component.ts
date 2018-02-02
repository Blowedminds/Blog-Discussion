import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router';

import { RequestService, ChatService } from '../../exports/services'

import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit {

  article: any;

  messages: any;

  slug: string;

  subs = new Subscription()

  constructor(
    private request: RequestService,
    private chat: ChatService,
    private route: ActivatedRoute,
)
{
  this.chat.echo.connector.connect()
}

  ngOnInit() {

    let rq1 = this.route.params.switchMap( (params: Params) => {

      if(this.slug)
        this.chat.echo.leave(this.slug)

      this.messages = null;


      this.slug = params['slug'];

      return this.request.getRoomMessages(params['slug'])
    }).subscribe( response => {

      this.article = response;

      this.messages = response.room.messages;

      this.chat.echo.channel(this.slug).listen('.new_message.created', message => this.messages.push(message))
    });

    this.subs.add(rq1);
  }

  ngDestroy()
  {
    this.subs.unsubscribe()

    this.chat.echo.disconnect();
  }

  sendMessage(f: NgForm)
  {
    let form = {
      message: f.value.message
    }

    this.subs.add(this.request.sendMessage(this.slug, form).subscribe(response => f.reset()));
  }

}
