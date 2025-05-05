
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
let Fibonacci = 0, Y = 1
console.log(Fibonacci);
console.log(Y);


for (let i = 2; i <= 10; i++) {
    let temp = Fibonacci + Y
    console.log(temp);
    Fibonacci = Y
    Y = temp
}



console.log("the multiplication numbers");

for (let i = 1; i <= 3; i++) {

    for (let X = 1; X <= 10; X++) {
        console.log(`${i} X ${X} = ${i * X}`);
    }
}