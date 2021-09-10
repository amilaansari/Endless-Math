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
var qnNum = document.getElementById("qn_limit").value
    //if user inputs 0
    if (lowNum == 0){
        lowNum += 1
    }
    if (qnNum == 0){
        qnNum += 1
    }

function startGame(){
    linebreak = document.createElement("br")
    //generate number 1 input
    var a = document.createElement("Input")
    a.setAttribute("type","text")
    a.setAttribute("name","number 1")
    a.setAttribute("id","a")
    document.getElementById("game").appendChild(a)
    //generate number 2 input
    var b = document.createElement("Input")
    b.setAttribute("type","text")
    b.setAttribute("name","number 2")
    b.setAttribute("id","b")
    document.getElementById("game").appendChild(b)
    //generate answer input
    var c = document.createElement("Input")
    c.setAttribute("type","text")
    c.setAttribute("name","answer")
    c.setAttribute("id","c")
    document.getElementById("game").appendChild(c)
    document.getElementById("game").appendChild(linebreak)

    //generate random numbers within limits set by user
    var x = Math.floor((Math.random() * highNum)+ lowNum)
    var y = Math.floor((Math.random() * highNum)+ lowNum)
    var z = x + y

    //print equation
    document.getElementById("a").value = x
    document.getElementById("b").value = y
    document.getElementById("c").value = z
 
  
    
}