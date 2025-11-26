$(function (){
    const children = new SantasList()
    let $nameField = $("#name")
    let $behaviorFields = $("input[name='behavior']");
    $('#santa-list').on('submit', function(e){
        e.preventDefault();

        // get values
        let name = $nameField.val().trim();
        let behavior = $("input[name='behavior']:checked").val();


        // assume the form is valid
        let isValid = true;
        clearErrors()

        // validate values
        isValid = validateName($nameField) ? isValid : false;
        isValid = validateBehavior($behaviorFields) ? isValid : false;
        if(isValid){
            // child constructor
            // create array of children
            // create html child div
            // add name and disposition
            const child = new Child(name, behavior);
            children.addChild(child)
            children.outputList()
            console.log(children)

        }

        
    });

});