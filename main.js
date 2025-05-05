
console.log("the even numbers");
for (let i = 0; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("the squares from 10 numbers");
for (let i = 0; i <= 10; i++) {
    console.log(Math.pow(i, 2));

}

console.log("the odd numbers");
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("the Fibonacci form 0 numbers");
let Fibonacci = 0
for (let i = 0; i <= 10; i++) {
    Fibonacci += i
    console.log(Fibonacci);
}



console.log("the Fibonacci form 0 numbers");

for (let i = 1; i <= 10; i++) {
    for (let X = 1; X >= 4; X++) {
        console.log(`${X} X ${i} = ${i * x}`);
    }
}