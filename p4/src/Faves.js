/* eslint-disable no-unused-vars */
import * as app from './app.js';
/* eslint-enable no-unused-vars */

export default class Faves {

  /**
   *
   */
  constructor() {
    // Extract JSON favorites string from local storage
    let favorites = localStorage.getItem('favorites');

    // Parse JSON favorites String to `items` object
    this.items = (favorites) ? JSON.parse(favorites) : {
      "favoriteRants": [],
      "favoriteRaves": []
    };

  }

  // get key based on review type
  getKey(type) {
    if (type === 'rant') {
      return 'favoriteRants'
    } else if (type === 'rave') {
      return 'favoriteRaves'
    }
  }
  /**
   * Getter method for items
   */
  getItems() {
    return this.items;
  }

  // count items of a particular type
  countItems(type) {
    let key = this.getKey(type)
    return this.items[key].length
  }


  /**
   * Update favorites in localstorage 
   */
  update() {
    localStorage.setItem('favorites', JSON.stringify(this.items))
  }

  /**
   * Add a new item of the given productId
   */
  add(type, id) {
    let key = this.getKey(type)
    // First see if item is already present
    let itemExists = this.getItem(type, id)

    if (!itemExists) {
      this.items[key].push(id)
    }

    this.update();
  }

  /**
   * Remove an item from items via productId
   */
  remove(type, id) {
    let key = this.getKey(type)
    let item = this.getItem(type, id);

    if (item) {
      let itemIndex = this.items[key].indexOf(id);
      if (itemIndex > -1) {
        this.items[key].splice(itemIndex, 1);
        this.update();
      }
    }
  }

  /**
   * Get an item from items via type and id
   * Returns true if it exists and null if it doesn't 
   */
  getItem(type, id) {
    let key = this.getKey(type)
    return this.items[key] && this.items[key].includes(id) || null;
  }
}
