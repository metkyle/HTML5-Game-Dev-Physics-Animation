var MISSLESPEED = 15;

function Missile(){
    tMissle = new Sprite(game, "./Images/missile.png", 30, 20);
    tMissle.hide();

    tMissle.fire = function(){
        this.show();
        this.setSpeed(MISSLESPEED);
        this.setBoundAction(DIE);
        this.setPosition(car.x, car.y);
        this.setAngle(car.getImgAngle());
        this.setSpeed(MISSLESPEED);

    }

    return tMissle;
}