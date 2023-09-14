const obj = {
    a: 'a',
    b: 'b',
    fun: function(){
        console.log(this.a + this.b);
    }
}

const obj2 = {
    a:'c',
    b:'d'
}

obj.fun.call = function (otherObject, ...args) {
    otherObject.fun = obj.fun;
    console.log(args);
    otherObject.fun();
    delete otherObject.fun;
}

obj.fun.call(obj2, '1', '2');