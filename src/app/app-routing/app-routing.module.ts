import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import * as components from '../exports/components'
import * as services from '../exports/services'

const routes: Routes = [
  { path: "", redirectTo: 'rooms', pathMatch: "full" },
  { path: "rooms", component: components.RoomsComponent },
  { path: "room/:slug", component: components.RoomComponent },
  { path: "auth", component: components.AuthComponent, children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login",/* canActivate: [GuestRouteGuard],*/ component: components.LoginComponent },
      // { path: "register",/* canActivate: [GuestRouteGuard],*/ component: components.RegisterComponent },
      { path: "logout", component: components.LogoutComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    { enableTracing: false}
  )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
