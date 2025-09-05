//Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
    return "Hello, " + user.name + "!" + " You are " + user.age + " years old.";
}

let user1 = {
	name: "kiran",
	age: 1900
}

let user2 = {
    name: "kumar",
    age: 2500
}

console.log(greet(user2));
