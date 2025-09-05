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

let result=canVote(20);
console.log("Can I vote? "+result);

let result1=canVote(15);
console.log("Can I vote? "+result1);
