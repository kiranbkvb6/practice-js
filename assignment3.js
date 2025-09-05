function canVote(age){
    
    if(age>=18){
        console.log("yes u can vote my dear gandu");
        return "yes";
    }else{
        let decision='pehele dimaagh ki batti jala ke aa gandu';
        return 'no';
    }
    
}

let result=canVote(20);
console.log("Can I vote? "+result);

