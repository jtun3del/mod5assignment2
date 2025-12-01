$(function (){
    const itemren = new GroceryList()
    let $nameField = $("#name")
    let $amountField = $("#amount");
    let $catagoryField = $("#catagory");
    let $divs = "#list>div"
    resetCatagories($divs);
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
            itemren.outputList($divs)
            console.log(itemren)

        }

        
    });
    $("#toggle-hide").on("change", function(){
        HideClass(".checked")
    })
    $("#filter-items").on("input", function(){
        resetCatagories($divs);
        let target = this.value
        let filteredList = itemren.filterList(target)
        let groceryList = new GroceryList();
        convertList(filteredList,groceryList)
        groceryList.outputList()

    })

});