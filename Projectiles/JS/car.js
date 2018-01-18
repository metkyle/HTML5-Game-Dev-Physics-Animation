function Car(){
    tCar = new Sprite(game, "./Images/car.png", 100, 45);
    tCar.setSpeed(0);

    tCar.checkKeys = function(){
        elapsedTime = timer.getElapsedTime();

        if(keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), 2);
        }
        if(keysDown[K_SPACE]){
            missile.fire();
        }
        if(keysDown[K_F]){
            if(elapsedTime > delay){
                currentBullet++;
                if(currentBullet >= NUM_BULLETS){
                    currentBullet = 0;
                }
            
            bulletArray[currentBullet].fire();
            timer.reset();
            }
        }
    }
    tCar.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95;
        this.setSpeed(speed);
    }
    return tCar;
    
}