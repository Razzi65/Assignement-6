//1. Write a ts program to print all natural numbers from 1 to n. - using while loop
// var nn:string|null=prompt("write a number");
// var n:number=Number(nn)
// var i:number=1;
// while (i<n) {
//     console.log(i);
//     i++;
// }
//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// var nn:string|null=prompt("write a number");
// var n:number=Number(nn)
// var i:number=0;
// while (i<n){
//     console.log(n-i);
//     i++
// }
//3. Write a ts program to print all alphabets from a to z. - using while loop
///////****** couldn't do******////////
// var i:number=0;
// while (i<27) {
//     console.log((i));
//     i++
// }
//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
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
//6. Write a ts program to find sum of all natural numbers between 1 to n.
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
//10. Write a ts program to count number of digits in a number.    
// var a=500;
// var b:string=a.toString ()
// var sum:number=0;
// for (var i=0;i<=b.length;i++) {
//     sum=i;
// }
// console.log(sum);
//6. Write a ts program to find sum of all natural numbers between 1 to n.
// var a:string|null=prompt("write a number")
// var b:number=Number(a)
// var sum = 0;
//     for (var i = 0; i<=b; i++){
//         sum += i;
//     }
//     console.log(sum);
//11. Write a ts program to find first and last digit of a number.
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
//12. Write a ts program to find sum of first and last digit of a number.
// var a:number=656567
// var b:string=a.toString()
// var c:number=0;
// for(var i=0;i<=b.length;i++) {
//     if(i==b.length) {
//         c=i;
//     }
// }
// console.log(Number(b[0])+Number(b[(c-1)]));
//13. Write a ts program to swap first and last digits of a number.
var a = 98954545453;
var b = a.toString();
var first = Number(b[0]);
var last = 0;
var mid = b[1];
for (var i = 0; i <= b.length; i++) {
    if (i == b.length) {
        last = Number(b[i - 1]);
    }
    if (i > 2 && i < (b.length)) {
        mid += (b[i - 1]);
    }
}
var final = Number(last + mid + first);
console.log(final);
