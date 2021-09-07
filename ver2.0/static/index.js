//on load
$(function(){
    //retrieve userName Input
    $("#start_btn").on("click",function(){
        const userName = $("#user_input_name").val()
        alert ("Welcome"+ userName + "!")
    })
    
});
    
    