import { Component, OnInit } from '@angular/core';
import { NgForm }                   from '@angular/forms';

import { AuthService, UserService, ApiService} from '../../../exports/services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private api: ApiService,
    private userService: UserService
  ) { }

  error: boolean = false;

  errorText: string = "Kullanıcı adı veya şifre yanlış";

  ngOnInit() {
  }

  login(f: NgForm)
  {
    this.error = false

    let rq1 = this.authService.login({
      email: f.value.email,
      password: f.value.password
    })
    .map(response => this.api.parseToken(response))
    .do(response => {

      localStorage.setItem('token', response.token);

      return response;
    })
    .catch(error => this.loginErrorHandler(error))
    .subscribe((response) => {

      let rq2 = this.userService.getUser().subscribe(response => {

        this.userService.updateUser(response)

        this.api.navigate(['rooms']);

        rq1.unsubscribe()

        rq2.unsubscribe()

        rq1 = rq2 = null
      })

    });
  }

  private loginErrorHandler(error: any, router: any = null): Promise<any>
  {
    let jsError = error.error

    console.log(error)

    switch(error.status){
      case 401:
        switch(jsError.error){
          case 'Invalid Credentials':
            this.error = true;
            break;
        }

    }

    return Promise.reject(error.message || error);
  }

}
