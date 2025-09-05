// Write a function that takes an object representing a user with properties name (string), age (number in years),gender (string: "Mr.", "Mrs.", "Others") and greets the user with their name, age and whether they can vote or not (age >= 18). For example, "Hi Mr. kiran, your age is 21 and you are eligible to vote."

function greet(user) {
    if(user.age >=18){
        return "Hello,"+ user.gender + user.name + " !" + " You are " + user.age + " years old." + " You are eligible to vote.";
    }else{
        return "Hello,"+ user.gender + user.name + " !" + " You are " + user.age + " years old." + " pehle 18 saal ke ho ke aa fir vote ki baat karna.";
    }
}

let user1 = {
    gender: " Mr.",
    name: "kiran",
    age: 19
}
let user2 = {
    gender: " Mrs.",
    name: "kumari",
    age: 2
}
console.log(greet(user1));
console.log(greet(user2));