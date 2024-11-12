const { Person } = require("./Person");

function arrPer() {
    let per = [];
    let arr1 = ["Sukesh", "Mariam", "Roger", "Ali", "James"];
    let arr2 = ["Sukesh@gmail.com", "Mariam@gmail.com", "Roger@gmail.com", "Ali@gmail.com", "James@gmail.com"];
    for (let i = 0; i < arr1.length; i++) {
        const pera = new Person(arr1[i], arr2[i]);
        per.push(pera);
    }
    return per;
}
module.exports.arrPer = arrPer;