var a= prompt("enter no");
var b=prompt("enter no");
var sum = Number(a)+Number(b);
var sub = Number(a)-Number(b);
var mul=Number(a)*Number(b);
var div=Number(a)/Number(b);
alert(sum);
alert(sub);
alert(div);
alert(mul);

var name="billy";
if(name==="billy"){
    alert("hi billy");
}else if(name ==="susy"){
    alert("hi susy");
}else{
    alert("name");
}

var firstName ="bob";
var lastName ="smith";
if(firstName==="bob"&&lastName==="smith"){
    alert("hi "+" " +firstName+" "+lastName);
}

var age=prompt("please enter your age");
if(Number(age)<18){
    alert("Sorry, you are too young to drive this car. Powering off");
}else if(Number(age) ===18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}else(Number(age)>18){
    alert("Powering On. Enjoy the ride!");
}
//switch case use


// function moveCommand(direction){
//     var whatHappens;
//     switch (direction){
//         case "forward" :
//             whatHappens = "you encounter a monster";
//             break;
//         case "back" :
//             whatHappens = "you arrived home";
//             break;
//         case "right" :
//             whatHappens = "you found a river";
//             break;
//         case "left" :
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens="please enter a valid dirction";        
//         }
//         return whatHappens;
//}

// ternary operator use


// function isUserValid(bool){
//     return bool;
// }

// var answer = isUserValid(true)?"you are entered":"access denied";