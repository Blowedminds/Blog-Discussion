import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomComponent } from './components/room/room.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';

import { ChatRequestService } from './services/chat-request.service';
import { ChatService } from './services/chat.service';

@NgModule({
  imports: [
    ChatRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    MessagesComponent,
    RoomsComponent,
    RoomComponent,
    SendMessageComponent,
    RoomsListComponent
  ],
  providers: [
    ChatRequestService,
    ChatService
  ]
})
export class ChatModule { }
