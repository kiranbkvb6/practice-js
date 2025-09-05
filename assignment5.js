//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function sumn(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    console.log("The sum of first "+num+" natural numbers is : "+sum);
    return sum;
}

sumn(5);
sumn(10);
sumn(0);
sumn(-3);
sumn(100);

sumn(50);
sumn(150);
sumn(200);