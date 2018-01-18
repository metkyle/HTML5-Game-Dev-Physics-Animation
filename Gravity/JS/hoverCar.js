function Hovercar(){
    tHover = new Sprite(game, "./Images/hoverCar.png", 70, 50);
    tHover.setSpeed(0);
    tHover.hSpeed = 0;

    tHover.checkKeys = function(){
        this.changeImage("./Images/hoverCar.png");

        if(keysDown[K_LEFT]){
            this.hSpeed -= 1;
        }
        if(keysDown[K_RIGHT]){
            this.hSpeed += 1;
        }
        if(keysDown[K_UP]){
            this.addVector(0, .5);
            this.changeImage("./Images/hoverCarThrust.png");
        }

        this.changeXby(this.hSpeed);
    }

    tHover.checkGravity = function(){
        if(this.y > 580){
            this.setPosition(this.x, 580);
        }else{
            this.addVector(180, .1);
        }
    }

    return tHover;
}