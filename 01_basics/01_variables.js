// ways to declare const & var

const accountId = 13445
let accountEmail = "anupam@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let accountState;

// accountId = 2. //not allowed

accountEmail = "anand@google.com"
accountPassword = "1234444"
accountCity = "Delhi"

// { } curly braces define the scope

console.log(accountId);




console.table([accountId,accountEmail,accountPassword,accountCity,accountState])