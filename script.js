/*Task#1*/
/* let sum = 0;
for (let i = 200; i <= 2700; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum = i;
    }
    console.log(sum);
}
 */

/* let sum = 0;
for (let i = 1; i <= 15; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        sum = sum + i;
    }

}
console.log(sum); */



/*Task#2*/

/* 
var myArray = [2, 1, 6, 4, -7];
console.log(myArray.reverse()) */


/*Task#3*/


/* for (var i = 1; i < 135; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
} */
/*Task#4*/
/* var fib = [];
fib[0] = 0;
fib[1] = 1;
for (var i = 2; i < 100000; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib)
 */


/*Task#5*/
/* 
var array = [1, -2, 4, 1];
array = array.filter(function(x) {
    return x > -1;
});
console.log(array); */


/*Task#6*/

/* function replace(replaced) {
    let last = [];
    for (let i = 0; i < replaced.length; i++) {
        if (array[i] === "Program") {
            last.push("******")
        } else(last.push(replaced[i]))
    }
    console.log(last)
};
let array = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
replace(array) */