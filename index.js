const body=document.getElementsByTagName("body")[0]

function setcolour(col){
  body.style.backgroundColor=col;
}
// setcolour("blue");
function randcolour(){
  const red=Math.round(Math.random()*255);
  const green=Math.round(Math.random()*255);
  const blue=Math.round(Math.random()*255);
  const color= `rgb(${red},${green},${blue})`;
  body.style.backgroundColor=color;
}
const input=document.getElementById("input");
function reverser(str){
  return str.split("").reverse().join("")
  
}
function check(){
  const value=input.value
  const reverse=reverser(value)
  if (value===reverse){
    alert("palindrome")
  }else{
    alert("not palindrome")
  }
  
  input.value=""
}
