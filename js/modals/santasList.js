function SantasList() {
    /** @var {Child[]} children */
    this.children = [];
    /**
     *
     * @param {Child} child
     */

    this.addChild = function(child) {
        this.children.push(child);
        this.children.forEach((child) =>{

        })
    }
    this.removeChild = function(child) {
        this.children.splice(this.children.indexOf(child), 1);
    }
    this.outputList = function() {
        $('.list').empty()
        this.children.forEach(function(child) {
            const santaListItem = new SantaListItem(child)
            $('.list').append(santaListItem.creatListItemElement())
        })

    }
}