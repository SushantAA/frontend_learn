const obj = {
    a:'c',
    b:'d'
}

Function.prototype.susApply = function (otherObject, ...args) {
    otherObject.fun = this;
    console.log(args);
    otherObject.fun();
    delete otherObject.fun;
}

function fun (){
   console.log(this.a + this.b);
}

fun.susApply(obj, ['1', '2']);