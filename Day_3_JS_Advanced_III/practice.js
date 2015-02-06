//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.
//Code Here
var inner = outer();

//Once you do that, invoke inner.
//Code Here

inner();

//Next problem









var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
//Code Here
var fn = callFriend();
console.log(fn('435-215-9248'));

//Next Problem









/*
  Write a function called makeCounter that makes the following code work properly.
*/
//Code Here


var makeCounter = function() {
  var privateCounter = 1;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */

//Next Problem









/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/
var callOnce = function(cb) {
  var executed = false;
  return function () {
    if (!executed) {
      cb();
      executed = true;
    }
  };
};

var foo = function(){
  alert("Hello");
};

var fooOnlyOnce = callOnce(foo);

fooOnlyOnce();




var callOnce = function(cb, n) {
  var executed = 0;
  return function () {
    executed ++;
    if (executed < n) {
      return cb();
    }
  };
};

var foo = function(){
  alert("Hello");
};

var foo = function(){
  alert("Hello");
};

var fooOnlyOnce = callOnce(foo);

fooOnlyOnce(4);





