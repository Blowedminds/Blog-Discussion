import { Component } from '@angular/core';

import { GlobalDataService, RequestService }  from './exports/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(
    private globalDataService: GlobalDataService,
    private requestService: RequestService
  )
  {
    this.requestService.getRooms().subscribe( response => globalDataService.rooms = response)
  }


}
