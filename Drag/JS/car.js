function Car(){
    tCar = new Sprite(game, "./Images/car.png", 100, 45);
    tCar.setSpeed(0);

    tCar.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), 2);
        }
    }
    tCar.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95;
        this.setSpeed(speed);
    }
    return tCar;
    
}