Array.prototype.filter = function(fxn){
    let newArr = [];

    this.forEach((a)=>{
        if(fxn(a))  newArr.push(a);
    })

    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6];

let brr =  arr.filter((a)=> a%2)

console.log(brr);