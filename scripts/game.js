import { Ball } from "./ball.js";
import { Canvas } from "./canvas.js"
import { Collider } from "./collider.js";
import { Control } from "./control.js";
import { Player } from "./player.js";
import { RenderUI } from "./renderUI.js";

class Game {
	constructor() {
		this.screen = new Map([
			["background", new Canvas()],
			["gamelayer", new Canvas()],
			["ui", new Canvas()]
		]);

		this.control1 = new Control([ [38, "up"], [40, "down"] ]);
		this.control2 = new Control([ [87, "up"], [83, "down"] ]);

		this.player1 = new Player(this, 10, 200, this.control1, "#52C5D4");
		this.player2 = new Player(this, this.screen.get("gamelayer").element.width - 20, 200, this.control2, "#EDEDED");

		this.ball = new Ball(this, (this.screen.get("gamelayer").element.width / 2), 100, 10, "#D3F349");

		this.collider = new Collider();

		this.UI = new RenderUI(this);

		this.init();
	}

	init() {

		// фон
		this.screen.get("background").fill("#424357");
		this.screen.get("background").drawRect( (this.screen.get("background").element.width / 2) - 3, 0, 6, this.screen.get("background").element.height, "#585874");
		this.screen.get("background").drawCircle( (this.screen.get("background").element.width / 2), (this.screen.get("background").element.height / 2), 100, 6, "#585874", false );

		requestAnimationFrame( time => this.loop(time) );

	}

	update(time) {

		this.ball.update(time);

		this.player1.update(time);
		this.player2.update(time);

	}

	loop(time) {

		this.screen.get("gamelayer").clear();

		this.update(time)

		this.ball.draw();
		this.player1.draw();
		this.player2.draw();
		
		requestAnimationFrame( time => this.loop(time) );
	}
}

window.onload = () => {
	const game = new Game();
}