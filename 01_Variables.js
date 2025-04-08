const accountId1=203402
let accountEmail="sushobhansaha@google.com"
var accountPassword='peregrine'
let accountCity='Gurugram'
accountState="Haryana"; // not using let also can be a way to define a variable

console.table([accountId1,accountEmail,accountPassword,accountCity,accountState]);

// accountId =3 is not allowed as it is constant and is immutable

const accountId2 = 303000
accountEmail="shrutirawat@google.com"
accountPassword='falcon'
accountCity='Bengaluru'
let accountState2;

console.table([accountId2,accountEmail,accountPassword,accountCity,accountState2])
/*
NOTE : Prefer not to use var because of issue in block scope and functional scope*/