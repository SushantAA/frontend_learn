let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.map = function (...prop){

    let {...b} = prop;
    console.log(b);
}

let brr =  arr.map((val, idx) => val + idx);

Array.prototype.myMap = function(fxn){
    const newArr = [];
    this.forEach(a => newArr.push(fxn(a)));
    this.forEach((a)=> console.log('a => ', a))
    return newArr;
}

brr =  arr.myMap((x) => 2*x);

console.log('brr => ', brr);