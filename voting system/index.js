
var input=document.getElementById("user input");
var clear=document.getElementById("delete");
clear.addEventListener("click",function(){
    if(input.value.length>0){
   input.value="";
}else{
    alert("please fill the item");
}
})
