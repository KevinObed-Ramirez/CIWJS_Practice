class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with spped ${this.speed}`)
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
};

let animal = new Animal('Gerald');

class Giraffe extends Animal {
    hide(){
        alert(`${this.name} hides!`)
    }
    stop(){
        // used for the giraffe to stop
        // instead of the stop class from Animal constructor 
        super.stop(); //animal eill stop and run first 
        this.hide(); //animal will hide
    }
}

let giraffe =  new Giraffe('Chad');

giraffe.run(5);
giraffe.hide();