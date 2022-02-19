var button= document.getElementById("enter");
var input=document.getElementById("user input");
var clear=document.getElementById("delete");
var ul = document.querySelector("ul");

// button.addEventListener("click",function(){
//     console.log("click done")
// })

// button.addEventListener("click",function(){
//     var li=document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })

// button.addEventListener("click",function(){
//     var li=document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// })

button.addEventListener("click",function(){
    if(input.value.length>0){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}else{
    alert("please fill the item");
}
})

input.addEventListener("keypress",function(event){
    if(input.value.length>0&&event.keyCode===13){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
})
