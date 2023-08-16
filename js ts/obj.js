function createObj(name, age){
    const u = Object.create(fob);
    u.name = name;
    u.age = age;
    return u;
}

const fob = {
    inc: function(){
        this.age++;
        console.log(age);
    }
};

const u1 = createObj('sus', 22);
const u2 = createObj('vin', 18);

u1.inc();