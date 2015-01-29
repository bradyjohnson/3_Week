/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 
//code here for sayHi
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the favNum function that makes the code above work, 
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
*/






//Code Here for first
var first = function(arr, cb){
    cb(arr[0]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is', firstName)
});






/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for last
var last = function(arr, cb){
  cb(arr[arr.length -1]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});







/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for multiply
var multiply = function(stra, strb, cb){
  cb(stra*strb());
};

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
});






/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for contains
var contains = function(arr, cb){
  for(var i = 0; i < arr.length; i++) {
  }
  cb();
};



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for uniq
var uniq = function(arr, cb){
  arr.filter(function(elem, pos) {
    return arr.indexOf(elem) == pos;
  });

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



var duplicatesArray = ['mike','james','james','alex'];

var uniqueArray = duplicatesArray.filter(function(elem, pos) {
  return duplicatesArray.indexOf(elem) == pos;
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
var getUserById = function(arr, cb){
  cb(arr.filter(id === '16t'))
};


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  }
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
