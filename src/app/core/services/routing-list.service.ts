import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class RoutingListService {
  routes: any = {
    chat: {
      url: 'discuss/',
      'rooms': { url: 'rooms/' },
      'room': { url: 'room/' },
      'message': { url: 'message/' },
      'messages': { url: 'messages/' }
    },
    auth: {
      url: 'auth/',
      'register': { url: 'register/' },
      'is-authenticated': { url: 'is-authenticated/' },
      'login': { url: 'login/' },
      'logout': { url: 'logout/' }
    },
    article: {
      url: 'editor/',
      'article': {
        url: 'article/',
        'content': { url: 'content/' },
        'restore': { url: 'restore/' },
        'force-delete': { url: 'force-delete/' },
        'permission': { url: 'permission/' }
      },
      'articles': { url: 'articles/' },
      'trash': { url: 'trashed-articles/' },
    },
    admin: {
      url: 'editor/panel/',
      'languages': { url: 'languages/' },
      'categories': { url: 'categories/' },
      'menus': { url: 'menus/' }
    },
    image: {
      url: 'image/',
      'image': { url: 'image/' },
      'thumb': { url: 'thumb/' },
      'images': { url: 'images/' },
      'edit': { url: 'edit/' }
    },
    user: {
      url: 'user/',
      'info': { url: 'info/' },
      'menus': { url: 'menus/en/' },
      'dashboard': { url: 'dashboard/' },
      'management': { url: 'management/' },
      'profile-image': { url: 'profile-image/' },
      'profile': { url: 'profile/' }
    },
    public: {
      url: '',
      'image': {
        url: 'images/',
        'author': { url: 'author/' }
      }
    }
  };

  constructor() { }

  getUrl(key: string): string {
    const parsedKey = this.parseKey(key);

    let route = this.routes;

    let url = '';

    for (let i = 0; i < parsedKey.length; i++) {

      url += route[parsedKey[i]].url;

      route = route[parsedKey[i]];
    }

    return url;
  }

  private parseKey(key: string): Array<string> {
    const parsedKey = [];

    for (let i = 0; i < key.length; i++) {

      const index = key.indexOf('.');

      if (index === -1) {

        parsedKey.push(key);

        break;
      } else if (index !== 0) {

        parsedKey.push(key.slice(0, index));
      }

      key = key.slice(index + 1);
    }

    return parsedKey;
  }
}
