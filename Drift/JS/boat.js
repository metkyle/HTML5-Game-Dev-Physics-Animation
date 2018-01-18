function Boat(){
    tBoat = new Sprite(game, "./Images/boat.png", 100, 45);
    //tBoat.setSpeed(0);

    tBoat.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), 2);
        }
        //add a small vector every frame, which provides the drift/skid mechanic
        this.addVector(this.getImgAngle(), (this.getSpeed() / 30));
    }
    tBoat.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95;
        this.setSpeed(speed);
    }
    return tBoat;
    
}