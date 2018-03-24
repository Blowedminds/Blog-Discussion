import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ChatRequestService } from '../../services/chat-request.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  @Input() messages: Array<any>;

  @Input() user;

  @ViewChild('editMessage') editMessage;

  edit_message: any;
  constructor(
    private chatRequestService: ChatRequestService
  ) { }

  ngOnInit() {
  }

  deleteMessage(message_id: number)
  {
    let rq1 = this.chatRequestService.deleteMessage(message_id).subscribe(response => rq1.unsubscribe())
  }
}
