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
function validateNumber($amountField) {
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

function validateId($IdField, gymlist) {
    let id = $IdField.val()
    if (id.length < 6) {
        addError($IdField, "Id must be at least 6 characters");
        return false
    }
    let val = true
    gymlist.itemren.forEach(function(member) {

        if (member.id === id) {
            addError($IdField, "Id must be unique");
            val = false
        }
    })
    return val
}

/**
 * Will only return false if the user edits the html
 * @param $CatagoryFields
 * @returns {boolean}
 */
function validateEnrollDate($DateFields) {
    let enrollDate = $DateFields.val()
     if(enrollDate > Date.now()) {
        addError($DateFields,"Enrollment date must be less or equal to the current date");
        return false;
    }
    return true
}

function validateCancellationDate($DateFields, EnrollDate) {
    let cancelDate = $DateFields.val()
    let enrollDate = EnrollDate.val()
    if(enrollDate > cancelDate) {
        addError($DateFields,"Cancellation date must be after enrollment date");
        return false;
    }
    return true
}
function validateUserName($UserNameFields) {
    let regexTest = /^[0-9]{2}[a-z]{4,6}$/
    let userName = $UserNameFields.val()
    if(!(regexTest.test((userName)))) {
        console.log("runs")
        addError($UserNameFields,"User name must be two numbers" +
            "followed by four to six letters")
        return false
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
    //$(catagories).hide()
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

function populateGymTable(gymList) {
    const $gymTable = $('#gym-members');
    $gymTable.html(`<tr>
    <th id="sort-id" scope="col">Id</th>
    <th id="sort-username" scope="col">User Name</th>
    <th id="sort-fname" scope="col">First Name</th>
    <th id="sort-lname" scope="col">Last Name</th>
    <th id="sort-enrolldate" scope="col">Enrollment Date</th>
    <th id="sort-canceldate" scope="col">Cancellation Date</th>
    <th id="sort-pool" scope="col">Pool Access</th>
    <th id="sort-spa" scope="col">Spa Access</th></tr>`);
    //foreach is an array method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    gymList.forEach(function(member) {
        $gymTable.append(createGymTableRow(member));
    })
}

function createGymTableRow(member) {
    return `<tr>
            <td class="center">${member.id}</td>
            <td>${member.username}</td>
            <td>${member.fname}</td>
            <td class="center">${member.lname}</td>
            <td>${member.enrollmentDate}</td>
            <td>${member.cancellationDate}</td>
            <td>${member.poolAccess}</td>
            <td>${member.spaAccess}</td>
            <td><input type="button" value="Delete" onclick="DeleteRow(this)"</td>
            
        </tr>`
}

function DeleteRow(row) {
    let index = $(row).parent().parent()[0].rowIndex;
    $("#gym-members")[0].deleteRow(index)
}

