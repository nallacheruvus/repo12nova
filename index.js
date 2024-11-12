const { arrPer } = require("./modper");
const arr = arrPer();
/**
 * Custom Iterator for a object array
 */
const perIter = {
    cIndex: 0,
    next: function () {
        if (this.cIndex < arr.length) {
            return {
                value: arr[this.cIndex++],
                done: false
            }
        } else {
            return { done: true }
        }
    }
}
//Iteration
for (let i = perIter.next(); i.done !== true; i = perIter.next()) {
    const obj = i.value;
    for (const k in obj) {
        console.log(k + " " + obj[k]);
    }
}
const pIter = arr[Symbol.iterator]();
for (let i = pIter.next(); i.done !== true; i = pIter.next()) {
    console.log(JSON.stringify(i.value));
}
let len = arr.length;
function* PerGen() {
    let i = 0;
    while (i < len) {
        yield JSON.stringify(arr[i]);
        i++;
    }
}
const perge = PerGen();
for (let i = perge.next(); i.done !== true; i = perge.next()) {
    console.log((i.value));
}
arr.map(n => JSON.stringify(n)).forEach(n => {
    console.log(n)
});
console.clear();
const myV = function (sqrt, log10, log) {
    this.sqrt = sqrt;
    this.log10 = log10;
    this.log = log;
}
var aa;
const myFun = (a) => {
    with (Math) {
        MYSQRT = sqrt(a);
        MYLOG10 = log10(a);
        MYLOGE = log(a);
        aa = new myV(MYSQRT, MYLOG10, MYLOGE);
        return aa;
    }
}
var p = myFun(10);
console.log(JSON.stringify(p));
