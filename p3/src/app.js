export { default as Favorites } from './Favorites.js';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/terichadbourne/e28-rantsraves-api/'
}

export let store = {
  "faves": {
    "favoriteRants": [],
    "favoriteRaves": []
  },
  "favoriteRantCount": 0,
  "hasFavoriteRants": false,
  "favoriteRaveCount": 0,
  "hasFavoriteRaves": false
}
