/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.
//code here
var userArray = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order
//code here
var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
or
userArray.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));


console.log('Tyler\'s information is '+ User[0]);
//Console.log all of Tylers information
//code here
var lenny = new User('Lenny', 'tylermcginnis33@gmail.com', 'pass123');

console.log('Lenny\'s information is '+ User[1]);
//Now console.log all of Lennys information
//code here
var cahlan = new User('Cahlan', 'tylermcginnis33@gmail.com', 'pass123');

console.log('Cahlan\'s information is '+ User[2]);
//Now create another instance of User using your own information and then add that to your users array.
//code here
var brady = new User('Brady', 'tylermcginnis33@gmail.com', 'pass123');

console.log('All my users names are ' + User);
//Now loop through your users Array and console.log every users name. 
//code here
console.log(userArray[i].name);