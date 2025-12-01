function GroceryList() {
    /** @var {Item[]} itemren */
    this.itemren = [];
    /**
     *
     * @param {Item} item
     */

    this.additem = function(item) {
        this.itemren.push(item);
    }
    /**
     * it resets the current catagory divs then populates the catagory divs and shows them
     * @param divs
     */
    this.outputList = function(divs) {
        resetCatagories(divs);
        this.itemren.forEach(function(item) {
            const santaListItem = new GroceryListItem(item)
            $(item.catagory).append(santaListItem.creatListItemElement())
            $(item.catagory).parent().show()
        })

    }
    /**
     * filters the parameter list. the last condition in the if is so the user can return to seeing the full list
     * @param target
     * @returns {Item[]}
     */
    this.filterList = function (target) {
        return this.itemren.filter(function(item){
        return item.name === target || item.catagory.replace("#","") === target || target === "";
    })
    }
}