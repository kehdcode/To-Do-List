//Check off specific list by clicking
$("li").click(function(){
$(this).toggleClass("completed");
});

//To delete and remove a list when x is clicked
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(5000, function(){
        $(this).remove();
    });
    //To stop event from propagating
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    //To get the type of key pressed
    if(event.which === 13){
        //Grabbing the new todo from input
    let todoText = $(this).val();
        $(this).val("");
        //Create a new Li and add o the ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + todoText + "</li>")
    }
});

//To toggle the input field
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
});
