/**
 *
 * @param {Child} child
 * @constructor
 */
function SantaListItem(child) {
    this.child = child
    this.creatListItemElement = function() {
        const $childDiv = $("<div class='child'>");
        $childDiv.append($(`<div class="disposition">${this.child.emoji()}</div>`))
        $childDiv.append($(`<div class="name">${this.child.name}</div>`))
        $childDiv.append(`<button class="delete"> remove child</button>`)
        return $childDiv;


    }
}