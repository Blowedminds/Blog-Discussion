import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Subscription } from 'rxjs/Subscription'

import { RequestService, ChatService } from '../../../exports/services'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  @Input() slug;

  subs = new Subscription()

  constructor(private request: RequestService) { }

  ngOnInit() {
    console.log(this.slug)
  }


  sendMessage(f: NgForm)
  {
    let form = {
      message: f.value.message
    }

    this.subs.add(this.request.sendMessage(this.slug, form).subscribe(response => f.reset()));
  }


}
