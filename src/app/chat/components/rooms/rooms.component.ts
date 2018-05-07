import { Component, OnInit } from '@angular/core';

import { ChatRequestService } from '../../services/chat-request.service';
import { CacheService } from '../../imports';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  rooms: any;

  get isPageReady() {
    return !!this.rooms;
  }

  constructor(
    private chatRequestService: ChatRequestService,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    this.cacheService.get('rooms', this.chatRequestService.makeGetRequest('chat.rooms'))
      .subscribe(response => this.rooms = response);
  }

}
