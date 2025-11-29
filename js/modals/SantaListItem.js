/**
 *
 * @param {Item} item
 * @constructor
 */
function SantaListItem(item) {
    this.item = item
    this.creatListItemElement = function() {
        let checkOffButton = $(`<button class="checked-off"> check off</button>`);
        checkOffButton.on("change", function() {this.toggle(".checked-off");});
        const $itemDiv = $("<div class='item'>");
        $itemDiv.append(`<div class="disposition">${this.item.emoji()}</div>`)
        $itemDiv.append(`<div class="name">${this.item.name}</div>`)
        $itemDiv.append(checkOffButton);

        return $itemDiv;


    }
}