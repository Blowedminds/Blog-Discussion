import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule}  from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { MaterialModule } from './exports/material.module';
import * as services from './exports/services'
import * as components from './exports/components';

@NgModule({
  declarations: [
    components.AppComponent,
    components.ChatComponent,
    components.ChatDirective,
    components.RoomsComponent,
    components.AuthComponent,
    components.LoginComponent,
    // components.RegisterComponent,
    components.LogoutComponent,
    components.RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  bootstrap: [components.AppComponent],
  providers: [
    services.RequestService,
    services.ApiService,
    services.ChatService,
    services.AuthService,
    services.UserService
  ]
})

export class AppModule { }
