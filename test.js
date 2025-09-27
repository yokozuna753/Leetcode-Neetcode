class Parent{
    constructor(height, hairColor){
        this.height = height;
        this.hairColor = hairColor;
    }

    run(){

    }

    drive(){

    }

    speak(){
        console.log("hello");
    }
}


class Child extends Parent{

    // speak(){
    //     console.log("waaaa");
    // }
}

const boy = new Child();

console.log(boy.run());

// abstraction
// encapsulation
// inheritance

// polymorphism


// const abdiel = new Parent("5'8", 'black');

class Math{
    static complexMath(x, y){
        return x * y**45 / 2;
    }
}

// console.log(abdiel.height, abdiel.hairColor);
// console.log(Math.complexMath(4,5));

