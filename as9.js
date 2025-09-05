//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let arr=[1,2,3,4,5];
console.log(arr);

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}

//correct way to do it using filter function.
let evenarr=arr.filter(function(num){
    return num%2==0;
});
console.log(evenarr);