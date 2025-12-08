$(function (){
    const gymList = new GymList()
    let $fnameField = $("#fname")
    let $idField = $("#member-id");
    let $lnameField = $("#lname");
    let $usernameField = $("#username")
    let $enrollDateField = $("#enrollment-date")
    let $cancellationDateField = $("#cancellation-date")
    let $poolAccessField = $("#pool-access")
    let $spaAccessField = $("#spa-access")
    let $table = "#list>table"
    let addform = $("#gym-list")
    //resetCatagories($divs);
    members.forEach(function(member) {
        gymList.additem(member)
    })
    populateGymTable(gymList.itemren)
    addform.on('submit', function(e){
        e.preventDefault();

        // get values
        let fname = $fnameField.val().trim();
        let lname = $lnameField.val().trim();
        let id = $idField.val();
        let username = $usernameField.val()
        let enrollmentDate = $enrollDateField.val();
        let cancellationDate = $cancellationDateField.val();
        let poolAccess = $poolAccessField[0].checked;
        let spaAccess = $spaAccessField[0].checked;


        // assume the form is valid
        let isValid = true;
        clearErrors()

        // validate values
        isValid = validateId($idField, gymList) ? isValid : false;
        isValid = validateName($fnameField) ? isValid : false;
        isValid = validateName($lnameField) ? isValid : false;
        isValid = validateUserName($usernameField) ? isValid : false;
        isValid = validateNumber($idField) ? isValid : false;
        isValid = validateEnrollDate($enrollDateField) ? isValid : false;
        isValid = validateCancellationDate($cancellationDateField, $enrollDateField) ? isValid : false;

        if(isValid){

            const item = new GymMember(username, fname, lname, id, enrollmentDate, cancellationDate, poolAccess, spaAccess);
            gymList.additem(item)
            gymList.outputList($table)
            console.log(gymList)
            //this.reset()

        }

        
    });
    $("#toggle-hide").on("change", function(){
        HideClass(".checked")
    })
    $("#gym-add-member").on("click", function() {
        $(addform).slideToggle()
    })
    $("#filter-items").on("input", function(){
        resetCatagories($table);
        let target = this.value
        let filteredList = gymList.filterList(target)
        let groceryList = new GymList();
        convertList(filteredList,groceryList)
        groceryList.outputList()

    })

    $('#sort-id').on('click', function(e){
        list = gymList.itemren
        list.sort(function(member1, member2) {
            if(member1.id > member2.id) {
                return 1;
            } else if (member1.id < member2.id) {
                return -1;
            }
            return 0;
        })
        populateGymTable(list);
    });
    $('#sort-id').on('click', function(e){
        list = gymList.itemren
        list.sort(function(member1, member2) {
            return member1.username.toLowerCase().localeCompare(member2.username.toLowerCase())
        })
        populateGymTable(list);
    });

});