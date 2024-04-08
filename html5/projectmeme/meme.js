var p = prompt("enter your name")

if (p == "sweety"){

var c =confirm(`is your name ${p}`)

if (c){
document.getElementById("image").hidden=false
}else {
    document.write("LAIR")
}

}else if (p=="sourabh"){
    document.getElementById("me").hidden=false
}else if(p=="basamma"){
    document.getElementById("maa").hidden=false
}else{
    document.write(`${p}`)
}