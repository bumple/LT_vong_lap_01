function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;

}

function choilai() {
    window.location.reload();
}

function choi() {
    let count = 0;
    let limit = 3;
    let min = +prompt("nhap gia tri min");
    let max = +prompt("nhap gia tri max");
    let ran = getRandom(min, max);
    document.getElementById("demo").innerHTML = "Kết quả là: " + ran;
    do {
        let num = +prompt("Dự Đoán số");
        if (num === ran) {
            alert("Chúc Mừng bạn đã đoán đúng");
            break;

        } else if (num > ran) {
            alert("Số bạn đoán lớn hơn kết quả");
            count++;
        } else if (num < ran) {
            alert("Số bạn đoán nhỏ hơn kết quả");
            count++;
        }
    } while (count < limit)

}