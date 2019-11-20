import * as app from './app.js';

export default class Favorites {

  // {
  //   favorites: {
  //     rants: [1, 3, 5],
  //     raves: [2, 4]
// }


    /**
     *
     */
    constructor() {
        // Extract JSON cart string from local storage
        let favorites = localStorage.getItem('favorites');

        // Parse JSON cart String to `items` object
        this.items = (favorites) ? JSON.parse(favorites) : {
          "favoriteRants": [],
          "favoriteRaves": []
        };

    }

    getKey(type) {
      if (type === 'rant') {
        return 'favoriteRants'
      } else if (type === 'rave') {
        return 'favoriteRaves'
      } else {
        console.log('unknown type')
      }
    }
    /**
     * Getter method for items
     */
    getItems() {
      console.log
        return this.items;
    }

    /**
     * Returns how many total items are in the cart
     */
    // count() {
    //     let sum = 0;
    //     for (let key of Object.keys(this.items)) {
    //         sum += this.items[key].quantity;
    //     }
    //     return sum;
    // }

    /**
     * Updates cart in localstorage
     */
    update() {
        localStorage.setItem('favorites', JSON.stringify(this.items))
        app.store.favorites = this.getItems();
        console.log('app.store.favorites is ', app.store.favorites)
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
          console.log('added item and this.items is: ', this.items)
        } else {
          console.log('item was already there')
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
     * Get an item from items via productId
     * Returns null if product does not exist in items
     */
    getItem(type, id) {
      let key = this.getKey(type)
        return this.items[key] && this.items[key].includes(id) || null;
    }
}
