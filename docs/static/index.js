//welcomeUser function
function welcomeUser(){
    //alert("clicked")
    //retrieve userName data
    var userName = document.getElementById("user_input_name").value;
    //print userName data
    document.getElementById("intro").innerHTML = "Welcome " + userName + "!";
}
var highNum = document.getElementById("top_limit").value
var lowNum = document.getElementById("bot_limit").value
    //if user inputs 0
    if (lowNum == 0){
        lowNum += 1
    }

function startGame(){

    //generate random numbers within limits set by user
    var x = Math.floor((Math.random() * highNum)+ lowNum)
    var y = Math.floor((Math.random() * highNum)+ lowNum)
    var z = x + y

    //print equation
    document.getElementById("x").value = x
    document.getElementById("y").value = y
    document.getElementById("z").value = z
    // document.getElementById("game").innerHTML = x + y
}