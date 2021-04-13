let num1 = 0;
let num2 = 1;
do {
    let total = num1 + num2
    num1 = num2;
    num2 = total
} while (num1 % 5 !== 0)
document.write(num1)
