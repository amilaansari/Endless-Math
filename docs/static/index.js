//welcomeUser function
function welcomeUser(){
    //alert("clicked")
    //retrieve userName data
    var userName = document.getElementById("user_input_name").value;
    //print userName data
    document.getElementById("intro").innerHTML = "Welcome " + userName + "!";
}
    