//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function eveodd(num){
    if(num%2==0){
        console.log(num+" is even number");
    }else{
        console.log(num+" is odd number");
    }
}
eveodd(5);
eveodd(10);
eveodd(0);
eveodd(-3);
eveodd(-8);