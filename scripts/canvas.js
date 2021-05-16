export class Canvas {
    constructor(w = 640, h = 480){
        this.element = document.createElement("canvas");
        this.context = this.element.getContext("2d");
        this.element.width = w;
        this.element.height = h;
        document.querySelector("#game").append( this.element );
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
    }

    drawRect(x, y, w, h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }

    drawRectRound(x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == "undefined" ) {
			stroke = true;
		}
		if (typeof radius === "undefined") {
			radius = 5;
		}
		if (typeof radius === 'number') {
			radius = {tl: radius, tr: radius, br: radius, bl: radius};
		} else {
			const defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
			for (let side in defaultRadius) {
				radius[side] = radius[side] || defaultRadius[side];
			}
		}
		this.context.beginPath();
		this.context.moveTo(x + radius.tl, y);
		this.context.lineTo(x + width - radius.tr, y);
		this.context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
		this.context.lineTo(x + width, y + height - radius.br);
		this.context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
		this.context.lineTo(x + radius.bl, y + height);
		this.context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
		this.context.lineTo(x, y + radius.tl);
		this.context.quadraticCurveTo(x, y, x + radius.tl, y);
		this.context.closePath();

		
		if (fill) {
			this.context.fillStyle = fill;
			this.context.fill();
		} 
		if (stroke) {
			this.context.strokeStyle = fill;
			this.context.stroke();
		}
    }

    drawCircle(x, y, r, lineWidth, color, fill = true){
        this.context.beginPath();
        this.context.lineWidth = lineWidth;
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.strokeStyle = color;

        if (fill) {
            this.context.fillStyle = color;
            this.context.fill();
        
            return;
        }

        this.context.stroke();
        this.context.closePath();
    }

    print(x, y, text, color) {
        this.context.fillStyle = color;
        this.context.font = "bold 20px sans-serif";
        this.context.fillText(text, x, y);
    }

    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
}