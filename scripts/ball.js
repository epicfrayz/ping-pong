import { Body } from "./body.js";

export class Ball extends Body{
    constructor(game, x, y, r, color) {
        super(x,y);

        this.game = game;
        this.r = r;
        this.width = this.r;
        this.height = this.r;
        this.color = color;
        this.speed = 4000;
        this.dx = this.speed;
        this.dy = this.speed;
        this.collisionShape = { x: this.x, y: this.y, width: this.r, height: this.r }
    }

    draw(){
        this.game.screen.get("gamelayer").drawCircle(this.x, this.y, this.r, 0, this.color);
    }

    spawn(time) {
        this.x = this.game.screen.get("gamelayer").element.width / 2;
        this.y = this.game.screen.get("gamelayer").element.height / 2;

        this.dx *= -1;
        this.dy *= time % 2 ? 1 : -1;
    }

    update(time) {
        // up
        if(this.y <= 0) {
            this.dy *= -1;
        }

        // down
        if(this.y + this.r >= this.game.screen.get("gamelayer").element.height) {
            this.dy *= -1;
        }

        // right
        if(this.x + this.r >= this.game.screen.get("gamelayer").element.width) {
            this.game.player1.scoreInc();
            this.game.UI.updateUI();
            this.spawn(time);
        }

        // left
        if(this.x - this.r <= 0) {
            this.game.player2.scoreInc();
            this.game.UI.updateUI();
            this.spawn(time);
        }

        // collision player 1
        if(this.game.collider.collides(this, this.game.player1)) {
            this.dx *= -1;
        }

        // collision player 2
        if(this.game.collider.collides(this, this.game.player2)) {
            this.dx *= -1;
        }

        this.bodyMove();

        super.update(time);
    }
}