import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    ChatModule
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
