export const routes: any = {
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
    image: {
      url: 'image/',
      'image': { url: 'image/' },
      'thumb': { url: 'thumb/' }
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
