//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user) {
    return "Hello,"+ user.gender + user.name + " !" + " You are " + user.age + " years old.";
}

let user1 = {
    gender: " Mr.",
    name: "kiran",
    age: 1900
}
let user2 = {
    gender: " Mrs.",
    name: "kumari",
    age: 2500
}
console.log(greet(user1));
console.log(greet(user2));