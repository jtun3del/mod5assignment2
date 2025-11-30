$(function (){
    const itemren = new SantasList()
    let $nameField = $("#name")
    let $amountField = $("#amount");
    let $catagoryField = $("#catagory");
    $('#santa-list').on('submit', function(e){
        e.preventDefault();

        // get values
        let name = $nameField.val().trim();
        let amount = $amountField.val();
        let catagory = $catagoryField.val();


        // assume the form is valid
        let isValid = true;
        clearErrors()

        // validate values
        isValid = validateName($nameField) ? isValid : false;
        isValid = validateAmount($amountField) ? isValid : false;
        isValid = validateCatagory($catagoryField) ? isValid : false;
        if(isValid){

            const item = new Item(name, amount, catagory);
            itemren.additem(item)
            itemren.outputList()
            console.log(itemren)

        }

        
    });
    $("#toggle-hide").on("change", function(){
        $(".checked").toggle(".hidden");
    })
    $("#filter-items").on("change", function(){
        resetCatagories("#list>div");
        let target = this.val()
        let filteredList = itemren.filter(function(item){
            return item.name === target || item.catagory === target;
        })
        filteredList.outputList()

    })

});