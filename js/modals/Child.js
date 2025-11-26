/**
 *
 * @param name
 * @param disposition naughty or nice
 * @constructor
 */
function Child(name, disposition) {
    this.name = name;
    this.disposition = disposition;

    this.emoji = function() {
        return this.disposition === 'nice' ? "😇" :  "😈"
    }


}