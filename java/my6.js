
let n = 0
let count = 0
let total = 0;
while (count<=30){
    let flag = false
    if(n % 7 === 0){
        flag = true
    }
    if (flag === true){
        total = total + n
        count++;
    }
    n++;
}
document.write(total)
