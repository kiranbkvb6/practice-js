//Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male
 

const arr=[{name:'kiran',age:20,gender:'male'},{name:'kumar',age:15,gender:'male'},{name:'raj kumari',age:30,gender:'female'}];

const eligibleVoters = arr.filter(user => user.age >= 18 && user.gender === 'female');

console.log(eligibleVoters);

const eligibleVoters1 = arr.filter(condition);

function condition(user) {
    return user.age >= 18 && user.gender === 'male';
}

console.log(eligibleVoters1);

const eligibleVoters2 = arr.filter(function(user) {
    return user.age < 18 && user.gender === 'male';
});

console.log(eligibleVoters2);