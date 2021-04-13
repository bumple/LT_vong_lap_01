let count = +prompt("so fibonacci can hien")
let i;
let num1 = 0;
let num2 = 1;
for (i=1;i<=count;i++){
    document.write(num1+" ")
    let total = num1 + num2
    num1 = num2;
    num2 = total
}
