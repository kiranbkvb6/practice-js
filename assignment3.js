//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    
    if(age>=18){
        console.log("yes u can vote my dear gandu");
        return "yes";
    }else{
        console.log('pehle dimaagh ki batti jala ke aa gandu');
        return 'no';
    }
    
}

let result11=canVote(45);
console.log("Can I vote? "+result11);
let result12=canVote('45');
console.log("Can I vote? "+result12);