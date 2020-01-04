// 求用十进制、二进制、八进制表示都是回
// 文数的所有数字中，大于十进制数10 的最
// 小值。
String.prototype.reverseOrder = function () {
    return this.split("").reverse().join("");
};

/**
 * @return {number}
 */
function Q1() {
    let num = 11;
    while (true) {
        if (num.toString() === num.toString().reverseOrder() &&
            num.toString(2) === num.toString(2).reverseOrder() &&
            num.toString(8) === num.toString(8).reverseOrder()) {
            console.log(num.toString(2));
            console.log(num.toString(8));
            break;
        }
        num += 2;
    }
    return num;
}

let number = Q1();
console.log(number);