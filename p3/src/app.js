export { default as Favorites } from './Favorites.js';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/terichadbourne/e28-rantsraves-api/'
}

export let store = {
  'favoriteRants': [],
  'favoriteRaves': []
}
