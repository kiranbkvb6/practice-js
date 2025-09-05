const arr=[{name:'kiran',age:20},{name:'kumar',age:15},{name:'raj',age:30}];

//correct way to do it using filter function.
let newarr=arr.filter(function(user){
    return user.age>=18;
});
console.log(newarr);








