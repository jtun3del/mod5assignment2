function GymList() {
    /** @var {GymMember[]} itemren */
    this.itemren = [];
    /**
     *
     * @param {GymMember} item
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
        populateGymTable(this.itemren)


    }
    /**
     * filters the parameter list. the last condition in the if is so the user can return to seeing the full list
     * @param target
     * @returns {GymMember[]}
     */
    this.filterList = function (target) {
        let len = target.length
        return this.itemren.filter(function(item){
        return (item.id) === target || item.username === target ||
            item.fname === target || item.lname === target || target === "";
    })
    }
}