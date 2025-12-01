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

/**
 * Validates amount field and returns true if valid
 * @param $amountField
 * @returns {boolean}
 */
function validateAmount($amountField) {
    let amount = $amountField.val()
    if(isNaN(amount)) {
        addError($amountField,"Must be a number");
        return false;
    } else if (amount < 1){
        addError($amountField, "Must be a positive number")
        return false;
    }
    return true

}

/**
 * Will only return false if the user edits the html
 * @param $CatagoryFields
 * @returns {boolean}
 */
function validateCatagory($CatagoryFields) {
    let catagory = $CatagoryFields.val()
     if(!["#Produce","#Grains","#Dairy","#Baking","#Meat","#Other"].includes(catagory)) {
        addError($CatagoryFields.first(),"Hacking is banned");
        return false;
    }
    return true

}

function clearErrors() {
    $(".error").remove();
    $(".invalid").removeClass("invalid")
}

/**
 *
 * @param catagories Gets the parent div of what it empties
 */
function resetCatagories(catagories) {
    $(catagories).hide()
    $(catagories + ">div").empty()

}

/**
 *
 * @param FilteredList plain list object
 * @param GroceryList empty grocery list item
 */
function convertList(FilteredList, GroceryList) {
    FilteredList.forEach(function(item) {
        GroceryList.additem(item)
    })

}


function HideClass(Class) {
    $(Class).toggle()
}