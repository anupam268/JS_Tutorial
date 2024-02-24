let score = 33
let score2 = "33jdj"
let score3 = null
let score4 = undefined

console.log(typeof score);
console.log(typeof(score2));
console.log(typeof(score3));
console.log(typeof(score4));


let scoreInNumber = Number(score)
let score2InNumber = Number(score2)
let score3InNumber = Number(score3)
let score4InNumber = Number(score4)

console.log("datatype of ",scoreInNumber ,"is ", typeof(scoreInNumber));
console.log("datatype of ",score2InNumber ,"is ", typeof(score2InNumber));
console.log("datatype of ",score3InNumber ,"is ", typeof(score3InNumber));
console.log("datatype of ",score4InNumber ,"is ", typeof(score4InNumber));



let str1 = "anupam"
let str2 = "anand"

let str3 = str1+str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
++gameCounter;
console.log(gameCounter);