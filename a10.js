//Question: Given an array of objects representing users with properties name (string) and age (number), write a function that filters out users who are below 18 years old and returns a new array with only the users who are 18 years old or older. For example, [{name: "kiran", age: 20}, {name: "kumar", age: 15}, {name: "raj", age: 30}] should return [{name: "kiran", age: 20}, {name: "raj", age: 30}].



const arr=[{name:'kiran',age:20},{name:'kumar',age:15},{name:'raj',age:30}];
//1st way of solving this filter function using explicit function

function votereligibility(user){//the parameter here is each object of the array
    return user.age>=18;
};

let newarr=arr.filter(votereligibility)// filter function inputs are only a function

console.log(newarr);


//2nd way of solving this filter function using inline  function

let newarr1=arr.filter(function(user){//the parameter here is each object of array
    return user.age>=18;
});// filter function inputs are only a function

console.log(newarr1);

//3rd way of solving this filter function using arrow function

let newarr3=arr.filter(user=>user.age>=18);// filter function inputs are operations

console.log(newarr3);






//filter function teach from basics


// ChatGPT said:

// Perfect 👍 Let’s start from zero basics about the filter() function in JavaScript.

// 1. What is filter()?

// filter() is an array method in JavaScript.

// It is used to create a new array that contains only the elements that pass a certain test/condition.

// It does not change the original array.

// 2. Syntax
// let newArray = oldArray.filter(function(element, index, array) {
//   // return true or false
// });


// element → the current item being processed.

// index → position of that element in the array (optional).

// array → the whole array you are filtering (optional).

// The callback must return true (keep the element) or false (skip the element).

// 3. Simple Example
// let numbers = [1, 2, 3, 4, 5];

// let evens = numbers.filter(function(num) {
//   return num % 2 === 0;   // keep only even numbers
// });

// console.log(evens);   // [2, 4]


// 👉 Step by step:

// Take 1 → 1 % 2 === 0 → false → skip.

// Take 2 → true → keep.

// Take 3 → false → skip.

// Take 4 → true → keep.

// Take 5 → false → skip.

// 4. Using Arrow Function
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);  // [2, 4]

// 5. With Objects (common use case)
// let users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 18 }
// ];

// let adults = users.filter(user => user.age >= 18);

// console.log(adults);
// // [ { name: "Bob", age: 20 }, { name: "Charlie", age: 18 } ]

// 6. Key Points to Remember

// filter() always returns a new array.

// If no elements pass, it returns [].

// The original array is never changed.

// The callback should return a boolean (true → keep, false → skip).

// 💡 Quick analogy: Imagine a tea filter → You pour everything in, but only tea comes out (the condition decides what passes).

// 👉 Do you want me to also explain the difference between filter(), map(), and forEach(), since people often get confused?

// You said:
// why can't we define function explicitly is it the only way to write this filter ? let evens = numbers.filter(function(num) {
//   return num % 2 === 0;   // keep only even numbers
// });
// ChatGPT said:

// Great question 👌 You absolutely can define a function explicitly and then use it in filter().
// The way you wrote it (inline function) is just one way. Let’s explore step by step:

// 1. Inline function (what you wrote)
// let numbers = [1, 2, 3, 4, 5];

// let evens = numbers.filter(function(num) {
//   return num % 2 === 0;
// });

// console.log(evens); // [2, 4]


// Here the function is anonymous (no name). It’s written directly inside filter().

// 2. Explicit function (named and reusable)
// let numbers = [1, 2, 3, 4, 5];

// // define a function separately
// function isEven(num) {
//   return num % 2 === 0;
// }

// // pass the function name to filter
// let evens = numbers.filter(isEven);

// console.log(evens); // [2, 4]


// ✅ This works perfectly fine.
// Advantage → You can reuse isEven() in multiple places.

// 3. Arrow function (shortest form)
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]


// This is just a shorthand for readability.

// 🔑 Key Takeaway

// You can pass any function to filter().

// Inline anonymous function

// Named function

// Arrow function

// All are valid. The important thing is → that function must return true or false for each element.

// 👉 Do you want me to show side-by-side comparison of filter() using all three styles so you can see they’re equivalent?

// ChatGPT can make mistakes. Check important info. See Cookie Preferences.





