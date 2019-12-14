import * as app from './app.js';

export default class Favorites {

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
   * Update favorites in localstorage and app.store
   */
  update() {
    localStorage.setItem('favorites', JSON.stringify(this.items))
    app.store.faves = this.getItems();
  }

  /**
   * Add a new item of the given productId
   */
  add(type, id) {
    let key = this.getKey(type)
    // First see if product is already present
    let item = this.getItem(type, id)

    if (!item) {
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

    let itemIndex = this.items[key].indexOf(item);

    if (item) {
      this.items[key].splice(itemIndex, 1);
      this.update();
    }
  }

  /**
   * Get an item from items via type and id
   * Returns null if it doesn't exist
   */
  getItem(type, id) {
    let key = this.getKey(type)
    return this.items[key] && this.items[key].includes(id) || null;
  }
}
