
    var menulist=["Pizza","Burger","Chips","Pasta"]

function change(){
  document.getElementById("hello1").innerHTML=menulist
}
function change1(){
var hello = document.getElementById("textinput").value 
menulist.push(hello)

document.getElementById("hello1").innerHTML=menulist

}