$(function (){
    const itemren = new SantasList()
    let $nameField = $("#name")
    let $behaviorFields = $("input[name='behavior']");
    let $catagoryField = $("#catagory");
    $('#santa-list').on('submit', function(e){
        e.preventDefault();

        // get values
        let name = $nameField.val().trim();
        let behavior = $("input[name='behavior']:checked").val();
        let catagory = $catagoryField.val();


        // assume the form is valid
        let isValid = true;
        clearErrors()

        // validate values
        isValid = validateName($nameField) ? isValid : false;
        isValid = validateBehavior($behaviorFields) ? isValid : false;
        isValid = validateCatagory($catagoryField) ? isValid : false;
        if(isValid){

            const item = new Item(name, behavior, catagory);
            itemren.additem(item)
            itemren.outputList()
            console.log(itemren)

        }

        
    });
    $("#toggle-hide").on("change", function(){
        $(".checked").toggle(".hidden");
    })

});