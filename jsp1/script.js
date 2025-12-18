    alert("hello world");
    console.log("hey im a console");
    console.log("code is running");
    // console is very useful , ues i debug , to see ur code is running
  var a = prompt("enter your number");
  console.log("your number is" + a); 
//   to store the data


var istrue = confirm("are you shour you want to leae this page and blast your computer");
if(istrue){
    console.log("your computer is blasting")
}
else{
    console.log("computer is not blasting")
}
console.log("your number is "+a)


// this error comes when we use these type of scrip which is only used in Crome 

// node : The term 'node' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify 
// that the path is correct and try again.
// At line:1 char:1
// + node script.js
// + ~~~~
//     + CategoryInfo          : ObjectNotFound: (node:String) [], CommandNotFoundException
//     + FullyQualifiedErrorId : CommandNotFoundException

document.title = "hey im good"
// document.body.style.backgroundcolor = "red"
// we can also use thi as css styling 