const obj = {
    a:'c',
    b:'d'
}

Function.prototype.susCall = function (otherObject, ...args) {
    otherObject.fun = this;
    console.log(args);
    otherObject.fun();
    delete otherObject.fun;
}

function fun (){
   console.log(this.a + this.b);
}

fun.susCall(obj, '1', '2');