import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms;

  @Input() slug;

  constructor() { }

  ngOnInit() {
  }

}
