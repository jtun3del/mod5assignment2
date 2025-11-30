/**
 *
 * @param {Item} item
 * @constructor
 */
function SantaListItem(item) {
    this.item = item
    this.creatListItemElement = function() {
        let checkOffButton = $(`<button class="checked-off"> check off</button>`);

        const $itemDiv = $("<div class='item white-box'>");
        $itemDiv.append(`<div class="amount">${this.item.amount}</div>`)
        $itemDiv.append(`<div class="name">${this.item.name}</div>`)
        $itemDiv.append(checkOffButton);
        checkOffButton.on("change", function() {this.parent().toggle(".checked");});

        return $itemDiv;


    }
}