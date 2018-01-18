var NUM_BULLETS = 100;
var bulletArray;
var currentBullet = 0;
var delay = 0.1;
var spread = 6;

function Bullet(){
    tBullet = new Sprite(game, "./Images/redBall.png", 10, 10);
    tBullet.hide();
    tBullet.setBoundAction(DIE);

    tBullet.fire = function(){
        this.show();
        //change bullet angle to be between -3 and 3 degrees
        modifier = (Math.random() * spread) - (spread / 2);
        this.setMoveAngle(car.getImgAngle() + modifier);
        this.setPosition(car.x, car.y);
        this.setSpeed(20);
    }

    return tBullet;
}

