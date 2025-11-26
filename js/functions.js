/**
 * Creates and outputs and error span before the selector
 * @param mesg
 */
function addError(selector, mesg) {

    const $msg = $('<span>').addClass("error").text(mesg);
    $(selector).addClass("invalid").before($msg).focus().parent()[0].scrollIntoView()
}

/**
 * validates name field and returns true if valid
 * @param $nameField
 * @returns {boolean}
 */
function validateName($nameField) {
    let name = $nameField.val().trim()
    if (name.length < 5) {
        addError($nameField, "Name must be at least 5 characters");
        return false
    } else if (/\d+/.test(name)) {
        addError($nameField, "Numbers not allowed");
        return false
    }
    return true
}

function validateBehavior($behaviorFields) {
    let behavior = $behaviorFields.filter(":checked").val()
    if(!behavior) {
        addError($behaviorFields.first(),"Must choose one");
        return false;
    }else if(!['nice','naughty'].includes(behavior)) {
        addError($behaviorFields.first(),"Prepare for coal");
        return false;
    }
    return true

}

function clearErrors() {
    $(".error").remove();
    $(".invalid").removeClass("invalid")
}