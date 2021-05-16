export class Vector {
    constructor(direction = "up", speed = 0) {
        this.direction = direction;
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
        this.setDirection(this.direction, this.speed);
    }

    setDirection(direction, speed) {
        this.direction = direction;
        this.speed = speed;
        this.dy = 0;

        switch(this.direction) {
            case "up":
                this.dy = -speed;
                break;
            case "down":
                this.dy = speed;
                break;
            default:
                this.dy = this.dy;
                break;
        }
    }

    kinematic(dx, dy){
        this.dx = dx;
        this.dy = dy;
    }

    move(obj) {
        obj.x += this.dx / 1000;
        obj.y += this.dy / 1000;
    }
}