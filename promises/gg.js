let pro = new Promise((resolve, reject)=> {
    reject(-1);
    // resolve(2);
});

pro.then((x)=>{
    console.log(x);
    return x*x;
}).catch((x) => {
    console.log(x);
    return x*x;
}).then((x) => {
    console.log(x);
    // return x*x;
    throw new Error(x*9);
}).catch((x) => {
    console.log(x);
})