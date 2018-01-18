var boat;
var game;

function init(){
    game = new Scene();
    boat = new Boat();

    game.start();
}

function update(){
    game.clear();
    
    boat.checkKeys();
    boat.checkDrag();

    boat.update();
}