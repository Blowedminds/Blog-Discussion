import { Component, OnInit } from '@angular/core';

import { RequestService, ChatService } from '../../exports/services'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  rooms: any;

  constructor(private chatService: ChatService) { }

  ngOnInit() {

    this.chatService.rooms.subscribe( response => this.rooms = response)
  }

}
