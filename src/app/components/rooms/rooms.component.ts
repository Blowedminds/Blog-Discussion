import { Component, OnInit } from '@angular/core';

import { RequestService, GlobalDataService } from '../../exports/services'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  rooms: any;

  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit() {

    this.globalDataService.rooms.subscribe( response => this.rooms = response)
  }

}
