function SantasList() {
    /** @var {Item[]} itemren */
    this.itemren = [];
    /**
     *
     * @param {Item} item
     */

    this.additem = function(item) {
        this.itemren.push(item);
        this.itemren.forEach((item) =>{

        })
    }
    this.removeitem = function(item) {
        this.itemren.splice(this.itemren.indexOf(item), 1);
    }

    this.outputList = function() {
        resetCatagories("#list>div");
        this.itemren.forEach(function(item) {
            const santaListItem = new SantaListItem(item)
            $(item.catagory).show().append(santaListItem.creatListItemElement())
        })

    }
}