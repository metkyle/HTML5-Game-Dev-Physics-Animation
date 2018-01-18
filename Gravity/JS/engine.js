var hCar;
var game;

function init(){
    game = new Scene();
    hCar = new Hovercar();

    game.start();
}

function update(){
    game.clear();
    
    hCar.checkKeys();
    hCar.checkGravity();

    hCar.update();
}