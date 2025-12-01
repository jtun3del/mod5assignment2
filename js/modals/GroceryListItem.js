/**
 *
 * @param {Item} item
 * @constructor
 */
function GroceryListItem(item) {
    this.item = item
    this.creatListItemElement = function() {
        let checkOffButton = $(`<button class="checked-off"> Check Off</button>`);

        const $itemDiv = $("<div class='item'>");
        $itemDiv.append(`<div class="amount">${this.item.amount} ${this.item.name}(s)</div>`)


        $itemDiv.append(checkOffButton);
        checkOffButton.on("click", function() {$(this).parent().toggleClass("checked");});

        return $itemDiv;


    }
}