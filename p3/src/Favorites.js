import * as app from './app.js';

export default class Favorites {

    /**
     *
     */
    constructor() {
        // Extract JSON cart string from local storage
        let favorites = localStorage.getItem('favorites');

        // Parse JSON cart String to `items` object
        this.items = (favorites) ? JSON.parse(favorites) : [];

    }

    /**
     * Getter method for items
     */
    getItems() {
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
    add(cacheKey) {

        // First see if product is already present
        let item = this.getItem(cacheKey)

        if (!item) {
            // Product not in cart, add as new item
            this.items.push({
              id: cacheKey,
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via productId
     */
    remove(cacheKey) {
        let item = this.getItem(cacheKey);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via productId
     * Returns null if product does not exist in items
     */
    getItem(cacheKey) {

        return this.items.find(({ id }) => id === cacheKey) || null;
    }
}
