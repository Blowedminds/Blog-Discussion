import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MainService }  from './main.service'
import { ApiService } from './api.service'

import { Observable, BehaviorSubject }     from 'rxjs';

@Injectable()
export class UserService extends MainService{

  public user = new BehaviorSubject<any>(0)

  public userObs = this.user.asObservable()

  constructor(
    http: HttpClient,
    api: ApiService
  )
  {
    super(http, api)
  }

  getUser(): Observable<any>
  {
    const url = this.MAIN_URI + this.USER_API_URL + "info?token=" + this.api.getToken()

    return this.http
                    .get(url, {headers :this.headers})
                  //  .map(response => response)
                    .catch(this.handleError)
  }

  updateUser(data: any)
  {
    this.user.next(data)
  }

  deleteUser()
  {
    this.user.next(null)
  }
}
