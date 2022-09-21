// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop

// var nn:string|null=prompt("write a number");
// var n:number=Number(nn)
// var i:number=1;
// while (i<n) {
//     console.log(i);
//     i++;
// }

// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop

// var nn:string|null=prompt("write a number");
// var n:number=Number(nn)
// var i:number=0;
// while (i<n){
//     console.log(n-i);
//     i++
// }

// 3. Write a ts program to print all alphabets from a to z. - using while loop
// /////****** couldn't do******////////

// var i:number=0;
// while (i<27) {
//     console.log((i));
//     i++
    
// }

// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop

// var i:number=0;

// while (i<100) {
//     if(i%2==0){
//         console.log( i,"is Even");
//            }  
//     i++;   
// }

// ..5. Write a ts program to print all odd number between 1 to 100.

// var i:number=0;
// while(i<100) {
//     if (i%2!=0) {
//         console.log(i, " is odd number")
//     }
//     i++
// }

// 6. Write a ts program to find sum of all natural numbers between 1 to n.

// var a:string|null=prompt("write a number");
// var aa:number=Number(a)
// var sum:number=0;

// for (var i=0;i<=aa;i++) {
//     sum +=i;
// }
// console.log(sum);





// 7. Write a ts program to find sum of all even numbers between 1 to n.

// var a:number=10;
// var sum:number=0;

// for(var i=0;i<=a;i++) {
//     if (i%2==0) {
//         sum+=i;
        
//     }
// }
// console.log(sum);


// 8. Write a ts program to find sum of all odd numbers between 1 to n.

// var a:number=5;
// var sum:number=0; //WHy it gives error if we dont initialize it?

// for (var i=0;i<=a;i++) {
//     if (i%2!=0) {
//         sum=sum+i;
//     }

// }
// console.log(sum);


// 9. Write a ts program to print multiplication table of any number.
   
// var b:string|null=prompt("write a number");
// var bb:number=Number(b)
// for (var i=0;i<11;i++) {
//     console.log(b, "x", i, "=", bb*i)
// }

// 10. Write a ts program to count number of digits in a number.    

// var a=500;
// var b:string=a.toString ()
// var sum:number=0;

// for (var i=0;i<=b.length;i++) {
//     sum=i;
    
// }
// console.log(sum);


// 6. Write a ts program to find sum of all natural numbers between 1 to n.

// var a:string|null=prompt("write a number")
// var b:number=Number(a)

// var sum = 0;
//     for (var i = 0; i<=b; i++){
        
//         sum += i;
//     }
//     console.log(sum);

// 11. Write a ts program to find first and last digit of a number.

// function finder (num:number) {


// var b:string=num.toString();
// var lastnum:number=0;

// for (var i=0;i<=b.length;i++) {
//     if(i==b.length){
//     lastnum=i;
//     }
//     }
//    return console.log("first digit is", b[0] , "last digit is", b[lastnum-1]);
// }

// var d=finder(4664649)

// 12. Write a ts program to find sum of first and last digit of a number.

// var a:number=656567
// var b:string=a.toString()
// var c:number=0;

// for(var i=0;i<=b.length;i++) {
//     if(i==b.length) {
//         c=i;
//     }
// }

// console.log(Number(b[0])+Number(b[(c-1)]));


// 13. Write a ts program to swap first and last digits of a number.

// var a:number=454865;
// var b:string=a.toString()

// var first:number=Number(b[0])
// var last:number=0;
// var mid:string=b[1];

// for (var i=0;i<=b.length;i++) {
//     if(i==b.length){
//         last=Number(b[i-1]);
//     }
//     if (i>2 && i<(b.length)) {
//          mid += (b[i-1])
//     }
//     }
//     var final:number= Number(last+mid+first)
//     console.log(final);

// 14. Write a ts program to calculate sum of digits of a number.
//<Second try>
// var a:number=6671
// var b:string=a.toString()
// var sum:number=0

// for (var i=0; i<b.length;i++) {
//     var c=Number(b[i])
//     sum+=c    
// }
// console.log(sum);



// <First Try>


// // var a:number=3333;
// // var b:string=a.toString()
// // var sum:string=b[0]
// // var total:number=0
// // var c:number=0;

// // for (var i=0;i<=b.length;i++) {

// //     if (i>1) {
// //         total = Number(b[i-1])        
// //     }
// //     c+=total;
// // }
// // console.log(c+Number(b[0]));

// 15. Write a ts program to calculate product of digits of a number.

// var a:number=244;
// var b:string=a.toString()
// var sum:number=1

// for(var i=0;i<b.length;i++) {


//     var c=Number(b[i]);
//     sum*=c

    
// }
// console.log(sum);


// 16. Write a ts program to enter a number and print its reverse.

// var a:number=123456
// var b:string=a.toString()
// var c:number=b.length

// var d:string = "";
// for (var i = b.length-1;  i >= 0;  i--) {
     
//      d += b[i]
     
//      }
//      console.log(d)


// var b:string=a.toString()
// var c:number=b.length

// var d:string = "";
// for (var i = 1; i <= b.length-1 ; i++) {
     
//      d += (b[(c--)])
     
//      }
//      console.log(d)

// 17. Write a ts program to check whether a number is palindrome or not.

// var a:number=123321
// var b:string=a.toString()
// var bb:number=b.length-1
// var c:string=""
// var d:string="" 

// for(var i=0;i<=b.length;i++) {

//     if (i!=b.length){
//     c += (b[i]) }

//     if (i<(b.length))
//      {
//     d += (b[bb--])
//      }}
//  if (c!=d){
//     console.log("Number is not Palindrome Number");
//     }
//     else console.log("Number is Palindrome")




// 18. Write a ts program to find frequency of each digit in a given integer.

// var a:number=565675
// var b:string=a.toString()
// var c:string=""

// for (var i=0;i<=b.length;i++) {
//     if(b[0] == b[i] ) {
               
//     }
// }
// console.log("frequency of ", b[0], c);




// 19. Write a ts program to enter a number and print it in words.
// 20. Write a ts program to print all ASCII character with their values.

// var a:string="Abc";

// for (var i=0; i<a.length;i++){

// console.log(a.charCodeAt(i))}


// 21. Write a ts program to find power of a number using for loop.
// var a:number=3;
// var power:number=1;

// for (var i=1;i<=a; i++) {
//     power *=a;
//     console.log(power);
    
//     }
//     console.log(power);
    

// 22. Write a ts program to find all factors of a number.
// 23. Write a ts program to calculate factorial of a number.

// var a:number=8
// var b:number=1

// for (var i=1; i<=5;i++) {
//     b*=i;
// }
// console.log(b)

// 24. Write a ts program to find HCF (GCD) of two numbers.

// var a:number=13
// var a2:number=19
// var b:string=""

// for(var i=1;i<a;i++){
    
//     if(a%i==0 && a2%i==0) {
//         b=i.toString()
//     }
// }
// console.log(b);


     




// 25. Write a ts program to find LCM of two numbers.


// 26. Write a ts program to check whether a number is Prime number or not.
// 27. Write a ts program to print all Prime numbers between 1 to n.
// 28. Write a ts program to find sum of all prime numbers between 1 to n.
// 29. Write a ts program to find all prime factors of a number.
// 30. Write a ts program to check whether a number is Armstrong number or not.
// 31. Write a ts program to print all Armstrong numbers between 1 to n.
// 32. Write a ts program to check whether a number is Perfect number or not.
// 33. Write a ts program to print all Perfect numbers between 1 to n.
// 34. Write a ts program to check whether a number is Strong number or not.
// 35. Write a ts program to print all Strong numbers between 1 to n.
// 36. Write a ts program to print Fibonacci series up to n terms.
// 37. Write a ts program to find one's complement of a binary number.
// 38. Write a ts program to find two's complement of a binary number.
// 39. Write a ts program to convert Binary to Octal number system.
// 40. Write a ts program to convert Binary to Decimal number system.
// 41. Write a ts program to convert Binary to Hexadecimal number system.
// 42. Write a ts program to convert Octal to Binary number system.
// 43. Write a ts program to convert Octal to Decimal number system.
// 44. Write a ts program to convert Octal to Hexadecimal number system.
// 45. Write a ts program to convert Decimal to Binary number system.
// 46. Write a ts program to convert Decimal to Octal number system.
// 47. Write a ts program to convert Decimal to Hexadecimal number system.
// 48. Write a ts program to convert Hexadecimal to Binary number system.
// 49. Write a ts program to convert Hexadecimal to Octal number system.
// 50. Write a ts program to convert Hexadecimal to Decimal number system.
// 51. Write a ts program to print Pascal triangle upto n rows.





// function myReplace(text:string, replaceTo:string, replacewith:string):string {

//     for (var i=2;i<=text.length;i++) {
//         if (text="love") {
            
//             break;
                        
//         }
        
        
//         return "i like pakistan"; 
//     }

//     }

// function rplc (text:string,replace:string,replacewith:string): string{

// var text:string= "i love pakistan"
// var replace:string=text.slice(2,6);

// var first:string="";
// var last:string="";
// var replacewith:string="like ";

// for(let i=0;i<=text.length;i++) {

//      if (i < 2  ) {
//          first+=text[i]
//      }
//      if (i > 6 && i<text.length ) {
//          last+=text[i]
//      }
// }

// return (first+replacewith+last);

// rplc ("i love pakistan","like","love")














    



