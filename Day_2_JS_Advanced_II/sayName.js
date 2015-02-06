//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.
//code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
};

//Now create three instances of Person with data you make up
//code here
var me = new Person("Brady Johnson", 32);

var Person = function(name, age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    alert(this.name);
  }
};

me.sayName();


var brady = new Person('Brady', '32');
var kristel = new Person('Kristel', '41');
var brooklyn = new Person('Brooklyn', '3');


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
//code here
var myInstance = new Person();
myInstance.alert(name());

