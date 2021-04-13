let count = +prompt("so fibonacci can tinh tong")
let i;
let num1 = 0;
let num2 = 1;
let sum = 1;
for (i = 1; i <= count; i++) {
    let total = num1 + num2
    num1 = num2;
    num2 = total
    sum = sum + total
}
document.write(sum);


