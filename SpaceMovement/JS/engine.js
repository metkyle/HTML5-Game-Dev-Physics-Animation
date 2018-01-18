var ship;
var game;

function init(){
    game = new Scene();
    ship = new Ship();

    game.start();
}

function update(){
    game.clear();
    ship.checkKeys();
    ship.update();
}