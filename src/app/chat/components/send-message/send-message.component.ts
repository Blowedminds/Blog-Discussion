import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ChatRequestService } from '../../services/chat-request.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.sass']
})
export class SendMessageComponent implements OnInit {

  @Input() slug;

  constructor(
    private chatRequestService: ChatRequestService
  ) { }

  ngOnInit() {
  }

  putMessage(f: NgForm)
  {
    let form = {
      message: f.value.message
    }

    let rq1 = this.chatRequestService.putMessage(this.slug, form).subscribe(response => {
      f.reset();
      rq1.unsubscribe();
    });
  }
}
