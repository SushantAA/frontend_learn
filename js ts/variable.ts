let vname: string = "sushant";

// vname = 6;

let x: number = 7;
let b: boolean = true;

vname.toLowerCase();


function getHero(x: number, z: string, y: boolean = true){
    return "spiderman";
}

let hero = getHero(1, "aa");

// hero = getHero();

type User = {
    readonly name: string;
    age: number;
    abc?: boolean;
}

type Card ={
    cnumber: string;
}

type Person = User & Card;

let u:Person={
    name: "sus",
    age: 17,
    cnumber: "123" 
};

let arr: number[]=[];
arr.push(1, 2, 3);

let un: number | string = 33;
alert(`un = ${un}`)
un = "sus";
alert(`un = ${un}`)


function funn(sq: number | string){
    if( typeof sq === "number"){
        console.log("from number");
    }
    else if(typeof sq === "string"){
        console.log("from string")
    }
}

funn(11);
funn("11");


alert(arr);

alert(u);

alert(vname);

let tarr : [number, string, boolean];
tarr = [1, "sus", true];

enum SeatChoice {
    A="p",
    B=1,
    C
}

interface Usa{
    readonly id: string; 
    name: string;
    rollno: number;
    eco( x: number ): number;
};

let usa: Usa = {
    id: "123",
    name: "cal",
    rollno: 1,
    eco(a) {
        return 25 + a;
    }
}

class Com{
    constructor (public x: number, private y: number) {};

    get getx(): number {
        return this.x;
    }

    set setx(a) {
        this.x = a;
    }

    private ttx(){
        console.log('ttx');
    }
};

let cc = new Com(1, 2);

//  cc.getx;
// cc.setx(1);
// // cc.ttx();

console.log( usa.eco(1) );

console.log(SeatChoice.A)
console.log(SeatChoice.B)
console.log(SeatChoice.C)

function funT<Type>(x: Type) :Type{
    return x;
}

const funt = <T>(x: T): T =>{
    return x;
}
console.log(funt(true));

console.log(funT(1));
console.log(funT("a"));
