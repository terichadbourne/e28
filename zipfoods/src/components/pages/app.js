export { default as Cart } from './Cart';

export const axios = require('axios');

// FIREBASE API ENDPOINTS
// https://e28-zipfoods-teri.firebaseio.com/products.json
// https://e28-zipfoods-teri.firebaseio.com/products/1.json

export const config = {
    // TO RETURN TO TYPICODE: 
    // api: 'https://my-json-server.typicode.com/terichadbourne/e28-zipfoods-api/'
    api: 'https://e28-zipfoods-teri.firebaseio.com/'
}

export let store = {
    cartCount: 0
}
