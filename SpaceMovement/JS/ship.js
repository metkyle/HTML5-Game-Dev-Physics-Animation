function Ship(){
    tShip = new Sprite(game, "./Images/ship.png", 25, 25);
    tShip.setSpeed(3);

    tShip.checkKeys = function(){
        if(keysDown[K_LEFT]){
            tShip.changeImgAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            tShip.changeImgAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), .1);
        }
    }
    return tShip;
}