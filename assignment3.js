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

let result2=canVote('kiran');
console.log("Can I vote? "+result2);    

let result3=canVote(true);
console.log("Can I vote? "+result3);    

let result4=canVote(false);
console.log("Can I vote? "+result4);    

//Side quest - Try passing in a string instead of a number and see what happens?                

let result5=canVote('18');
console.log("Can I vote? "+result5);

let result6=canVote('seventeen');
console.log("Can I vote? "+result6);

let result7=canVote(null);
console.log("Can I vote? "+result7);

let result8=canVote(undefined);
console.log("Can I vote? "+result8);

let result9=canVote(NaN);
console.log("Can I vote? "+result9);

let result10=canVote(-19);
console.log("Can I vote? "+result10);

