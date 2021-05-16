export class RenderUI {
    constructor(game) {
        this.game = game;
        this.posLeftY = this.game.screen.get("ui").element.width / 4;
        this.posRightY = this.game.screen.get("ui").element.width - this.posLeftY;

        this.init();
    }

    init() {
        this.updateUI();
    }

    updateUI() {

        this.game.screen.get("ui").clear();

        this.game.screen.get("ui").drawRectRound( this.posLeftY - 32, 10, 64, 40, 20, "rgba(38,38,38,0.7)" );
        this.game.screen.get("ui").print( this.posLeftY - 6, 38, this.game.player1.score, "#52C5D4" );

        this.game.screen.get("ui").drawRectRound( this.posRightY - 32, 10, 64, 40, 20, "rgba(38,38,38,0.7)" );
        this.game.screen.get("ui").print( this.posRightY - 6, 38, this.game.player2.score, "#EDEDED" );

    }
}