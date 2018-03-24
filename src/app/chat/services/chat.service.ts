import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import * as Echo from 'laravel-echo';

import { environment } from '../../../environments/environment'

@Injectable()
export class ChatService {

  public echo: any;

  constructor()
  {
    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: environment.socket.baseUrl,
    });

    this.echo.connector.connect();
  }

}
