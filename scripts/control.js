export class Control {
    constructor(keyMap) {
        this.up = false;
        this.down = false;
        this.idle = false;
        this.keyMap = new Map(keyMap);

        document.addEventListener( "keydown", (e) => this.update(e, true) );
        document.addEventListener( "keyup", (e) => this.update(e, false) );
    }

    update(e, state) {
        if( this.keyMap.has(e.keyCode) ) {
            this[this.keyMap.get(e.keyCode)] = state;
        }
    }
}