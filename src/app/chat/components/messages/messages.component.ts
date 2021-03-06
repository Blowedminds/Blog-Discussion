import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ChatRequestService } from '../../services/chat-request.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  @Input() messages: Array<any>;

  // tslint:disable-next-line:no-input-rename
  @Input('user') _user;

  get user() {
    return this._user || { user_id: '' };
  }

  @ViewChild('editMessage') editMessage;

  edit_message: any;
  constructor(
    private chatRequestService: ChatRequestService
  ) { }

  ngOnInit() {
  }

  deleteMessage(message_id: number) {
    const rq1 = this.chatRequestService.deleteMessage(message_id)
      .subscribe(response => rq1.unsubscribe());
  }
}
