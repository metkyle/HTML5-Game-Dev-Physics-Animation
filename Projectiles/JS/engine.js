var car;
var game;
var missile;
var timer;
var elapsedTime;

function init(){
    game = new Scene();
    car = new Car();
    missile = new Missile();
    timer = new Timer();
    
    makeBullets();
    game.start();
}

function update(){
    game.clear();
    
    car.checkKeys();
    car.checkDrag();

    car.update();
    missile.update();
    updateBullets();
}

function makeBullets(){
    bulletArray = new Array(NUM_BULLETS);
    for(i = 0; i < NUM_BULLETS; i++){
        bulletArray[i] = new Bullet();
    }
}

function updateBullets(){
    for(i = 0; i < NUM_BULLETS; i++){
        bulletArray[i].update();
    }
}