import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  private rooms: any;

  constructor(private request: RequestService) { }

  ngOnInit() {

    this.request.getRooms().subscribe( response => this.rooms = response)
  }

}
