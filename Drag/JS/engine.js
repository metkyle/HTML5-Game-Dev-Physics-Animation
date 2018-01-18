var car;
var game;

function init(){
    game = new Scene();
    car = new Car();

    game.start();
}

function update(){
    game.clear();
    car.checkKeys();
    car.checkDrag();

    car.update();
}