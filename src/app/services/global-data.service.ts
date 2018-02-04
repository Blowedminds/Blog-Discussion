import { Injectable } from '@angular/core';

import { BehaviorSubject }  from 'rxjs/BehaviorSubject'

@Injectable()
export class GlobalDataService {

  private _rooms: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }

  get rooms()
  {
    return this._rooms.asObservable()
  }

  set rooms(value)
  {
    this._rooms.next(value)
  }

}
