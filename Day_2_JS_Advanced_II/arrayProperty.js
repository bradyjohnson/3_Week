//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
//code here
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
};
function (){
  return this.split('').reverse().join('')
}










String.prototype.reverse = function(){
  console.log(this);
};

function(){
  console.log(this);
}

var mystr = 'Hello World';
mystr.speak();

