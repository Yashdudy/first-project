// alert("hi there");
// 2+3
// var c = 3+4;
// // alert(Number(c));
// // console.log(Number(c));
// console.log(2+3);


// function multiplty(a,b){
//     return a*b;
// }

// alert(multiplty(3,4));


// function checkDriverAge(){
//     var age =prompt("please enter your age");
//     if(Number(age<18)){
//         alert("you are not elegible powering off");
//     }else if(Number(age)===18){
//         alert("enjoy your first ride");
//     }else{
//         alert("powering on");
//     }
// }

// checkDriverAge();

// function checkDriverAge(age){
//         // var age =console.log("please enter your age");
//         if(Number(age<18)){
//             return("you are not elegible powering off");
//         }else if(Number(age)===18){
//             return("enjoy your first ride");
//         }else{
//             return("powering on");
//         }
//     }
    
    // checkDriverAge(16); 
    // driver(17);


    // var array=["banana","apples","orange","blueberries"];
    // array.shift();
    // array;
    // console.log(array);
    // // console.log(array.sort(););
    // array.sort();
    // console.log(array);
    // array.push("kiwi");
    // console.log(array);
    // array.shift();
    // console.log(array);
    // array.reverse();
    // console.log(array);

    // var array2 =["banana",["apples",["oranges"],"blueberries"]];
    // console.log(array2[1][1][0]);


    // var fb ={
    //     username : "yash",
    //     password : "pal"
    // };

    // var database =[
    //     {
    //         username : "yash",
    //         password : "pal"
    //     }
    // ];

    // var newsfeed = [
    //     {
    //         username : "yash",
    //         timeline : "pal"
    //     },
    //     {
    //         username : "ram",
    //         timeline : "seeta"
    //     },
    //     {
    //         username : "krish",
    //         timeline : "rohit"
    //     }
    // ];

    // var userprompt = prompt("what is your username");
    // var passwordprompt = prompt("what is your password");

    // function signIn(user,pass){
    //     if(user===database[0].username && pass===database[0].password){
    //         console.log(newsfeed);
    //     }else{
    //         console.log("wrong credentials");
    //     }

    // }

    // signIn(userprompt,passwordprompt);


    var database =[
        {
            username : "yash",
            password : "pal"
        },
        {
            username : "ram",
            password : "seeta"
        },
        {
            username : "ganesh",
            password : "meena"
        }
    ];

    var newsfeed = [
        {
            username : "yash",
            timeline : "pal"
        },
        {
            username : "ram",
            timeline : "seeta"
        },
        {
            username : "krish",
            timeline : "rohit"
        }
    ];
   

    function isUser(username,password){
        for(var i=0; i < database.length; i++){
            if(database[i].username===username && database[i].password===password){
                return true;
            }
        }
        return false;
    }

    function signIN(username,password){
        if(isUser(username,password)){
            console.log(newsfeed);
        }else{
            alert("sorry , wrong credentials");
        }
    }

    var userprompt = prompt("what is your username");
    var passwordprompt = prompt("what is your password");
    signIN(userprompt,passwordprompt);




    // function signIn(user,pass){
    //     if(user===database[i].username && pass===database[i].password){
    //         console.log(newsfeed);
    //     }else{
    //         console.log("wrong credentials");
    //     }

    // }

    // function signIN(user,pass){
    //     for(var i=0;i<database.length;i++){
    //         if(user===database[i].username&&pass===database[i].password){
    //             console.log(newsfeed);
    //         }else{
    //             alert("wrong credentials");
    //         }
    //     }
    // }

    // // signIN(userprompt,passwordprompt);
    // signIN(userprompt,passwordprompt);

    // function isUser(username,password){
    //     for(var i=0;i<database.length;i++){
    //         if(database[i].username===username && database[i].password===password){
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // function signIN(username,password){
    //     if(isUser(username,password)){
    //         console.log(newsfeed);
    //     }else{
    //         alert("sorry , wrong credentials");
    //     }
    // }