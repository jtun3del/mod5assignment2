/**
 *
 * @param name
 * @param disposition naughty or nice
 * @param catagory "#Produce","#Grains","#Dairy","#Baking","#Meat","#Other"
 * @constructor
 */
function Item(name, disposition,catagory) {
    this.name = name;
    this.disposition = disposition;
    this.catagory = catagory;

    this.emoji = function() {
        return this.disposition === 'nice' ? "😇" :  "😈"
    }


}