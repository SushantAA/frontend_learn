Array.prototype.reduce = function (fxn, total) {
    this.forEach((a) => {
        total += fxn(a);
    })
    return total;
}

let arr = [1, 2, 3, 4, 5, 6];

let total = arr.reduce((a)=>2*a, 0);

console.log(total);