var Cat = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}
var Cat = function(tiredness, hunger, lonliness, happiness){
	this.tiredness = tiredness;
	this.hunger = hunger;
	this.lonliness = lonliness;
	this.happiness = happiness;
}

Cat.prototype.meow = function () {
   console.log("Meow!")
}

Cat.prototype.feed = function(hunger){
	hunger.status = "starving";
}

var Person = function(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.feedCat = function(hunger, happiness){
	hunger.status = "full";
	happiness.status = "excited for life";
	console.log("The cat is " + hunger.status+" and "happiness.status);
}

var fluffy = new Cat("Fluffy", "Kitty");
var happy = new Cat("Happy", "Kitty");

var lonliness = 
	status: "sad"
	

