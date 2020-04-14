// 组合的方法是在各个数字之间插入四则运算的运算符组成算式，然
// 后计算算式的结果（某些数位之间可以没有运算符，但最少要插入1 个
// 运算符）。
// 例） 1234 → 1＋ 2×3 - 4＝ 3
//      9876 → 9×87 ＋ 6＝ 789
// 假设这里的条件是，组合算式的计算结果为“将原数字各个数位上
// 的数逆序排列得到的数”，并且算式的运算按照四则运算的顺序进行
// （先乘除，后加减）。
// 那么位于100~999，符合条件的有以下几种情况。
// 351　→　3×51＝ 153
// 621　→　6×21＝ 126
// 886　→　8×86＝ 688

// 求位于1000~9999，满足上述条件的数
// 最多插入三个运算符
function Q2() {
    let res = [];
    // let op = ["+", "-", "*", "/", ""];//""意味着不插入运算符
    let op = ["*",""];// + - /之后，为数不可能为4
    for (let v = 1000; v <= 9999; v++) {
        let str = v + "";
        for (let i = 0; i < op.length; i++) {
            for (let j = 0; j < op.length; j++) {
                for (let k = 0; k < op.length; k++) {
                    let newStr = str[0] + op[i] + str[1] + op[j] + str[2] + op[k] + str[3];
                    if (newStr.length > 4) {
                        let evalRes = eval(newStr);
                        if ((evalRes + "").length !== str.length) {
                            continue;
                        }
                        let evalReverse = parseInt((evalRes + "").split("").reverse().join(""));
                        if (evalReverse === v) {
                            res.push(str);
                        }
                    }
                }
            }
        }
    }
    return res;
}

let q2 = Q2();
console.log(q2);