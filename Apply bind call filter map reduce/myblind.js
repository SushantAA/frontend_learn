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

obj.fun.bind = function (otherObject, args) {
    return ()=>{
        otherObject.fun = obj.fun;
        console.log(args);
        otherObject.fun();
        delete otherObject.fun;
    }
}

const fxn = obj.fun.bind(obj2, ['1', '2']);

fxn();
fxn();