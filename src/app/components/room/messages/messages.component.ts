import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RequestService } from '../../../exports/services'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  @Input() messages;

  @Input() user;

  @ViewChild('editMessage') editMessage;

  edit_message: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {

  }

  openEditMessage(event: any, message: any)
  {
    this.edit_message = message

    console.log(this.editMessage, event)

    console.log(this.editMessage.nativeElement.style.top)
    this.editMessage.nativeElement.style.top = event.pageY + "px"
    this.editMessage.nativeElement.style.left = event.pageX + "px"
    console.log(this.editMessage.nativeElement.style.top)

  }

  postMessage(message)
  {

  }

}
