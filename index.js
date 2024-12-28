// let x = 5;
// while (x < 3) {
//     console.log(x);
//     x++;}


// let y = 0;
// do {
//     console.log(y);
//     y++;
// } while (y < 2);


// let count = 5;
// do {
//     console.log(count);
//     count--;
// } while (count > 0);


// let z = 0;
// while (z < 3) {
//     console.log(z);
//     z++;
// }


// let i = 0;
// while (i < 5) {
//     console.log(i);
//     if (i === 3) break;
//     i++;
// }


// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 0);


// let n=1
// do{
//     console.log(n)
//     n++
// }
// while(n<=5);


// let n = 1;

// while (n <= 5) {
//     console.log(n);
    
//     if (n === 3) {
        
//         break; 
//     }
    
//     n++; 
// }

// 3.	Write a while and do while loop that prints numbers from 1 to 10, 
// but skips printing the any number from 1 to 10 .



// let n = 1;
// do {
//     if (n === 8) {
//         n++; 
//         continue; 
//     }
//     console.log(n);
//     n++;
// } while (n <= 10);


// let n = 1;
// while(n<=10){
//     if(n===8){
//         n++
//         continue
//     }
//     console.log(n)
//     n++
    
// }


// 4. Write a while loop that prints all even numbers from 0 to 20.
// let n=1
// while(n<=20){
//     if(n%2==0){
//         console.log(n)
//         }n++
// }



// 1.Write an if statement in JavaScript that checks if a
//  number is greater than 10, and prints "Number is greater than 10" if true.

// let n=17
// if(n>10){
//     console.log(`${n} is greatern than 10`)
// }
// if(n<0){
//     console.log(`not greatern than 10`)
// }


// 2.	Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd.2.	Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd.


// let n=37
// if(n%2==0){
//     console.log(`${n} is even number`)
// }
// else{
//     console.log(`${n} is odd number`)
// }

// 3.	Write an if-else if-else ladder that checks the value of a variable grade and prints:
// •	"A" for grades 90 and above,
// •	"B" for grades 80 to 89,
// •	"C" for grades 70 to 79,
// •	"F" for grades below 70.


// let marks=100
// if(marks==90 && marks>90){
//     console.log(`a`)
// }
// else if(marks==80 && marks<=89){
//     console.log(`b`)
// }
// else if(marks==70 && marks<=79){
//     console.log(`c`)
// }
// else
// {
//     console.log(`f`)
// }


// 4.	Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.

// let n =67
// if(n>0){
//     console.log(`${n} postive`)
//     if(n%2==0){
//         console.log(`${n} is even`)
//     }
//     if(n%2!=0){
//         console.log(`${n} is odd`)
//     }
// }


	// Rewrite the following code using if else statement :
    //             let age = 20;
    //              console.log(age >= 18 ? "Adult" : "Minor");


// let age=15;
// let age1="adult"
// let age2="minor"
// if(age>=18){
//     console.log(`ur ${age1} age is ${age} ur eligible to cast the vote`)
// }
// else{
//     console.log(`ur ${age2} age is ${age} ur not-eligible to cast the vote`)

// }


// 6.	Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".

// let n =20
// if(n<=20){
//     for(i=10;i<n;i++)
       
//     console.log(`${i} in range`)
// }
// else{
//     console.log("out of the range")
// }


// 8.	Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.

// let number = 15;
// if((number>10 && number<20) || number===30)

//  {
//     console.log("Condition met");
// }

// 7.	What is the difference between == and === in an if statement in JavaScript? Provide an example where each would behave differently.

let a="3"
let b=3
console.log(a==b)
console.log(a===b)


