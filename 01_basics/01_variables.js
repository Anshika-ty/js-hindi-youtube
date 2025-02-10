const accountId=14553
let accountEmail="anshika@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;
//accountId =2 //not allowed
console.log(accountId);
accountEmail="at@google.com"
accountCity="bengaluru"
accountPassword="4566"

/*
prefer not to use var  bcz of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])