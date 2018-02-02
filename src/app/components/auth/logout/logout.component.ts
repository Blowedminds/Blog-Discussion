import { Component, OnInit } from '@angular/core';

import { AuthService, UserService, ApiService} from '../../../exports/services'  

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private api: ApiService,
    private userService: UserService
  ) { }

  ngOnInit() {

    let rq1 = this.authService.logout().subscribe(response => {
      localStorage.removeItem('token')
      this.api.navigate(['/auth/login']);
      this.userService.deleteUser()
      rq1.unsubscribe()
      rq1 = null
    })
  }

}
