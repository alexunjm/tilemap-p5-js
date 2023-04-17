const s = (p) => {
	p.setup = function () {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.windowResized();
		RESOURCE.fn.loadTileImages(p);
	};

	p.draw = function () {
		p.background(VARS.CANVAS.BG_COLOR);

		RESOURCE.fn.drawTileGrid(p);
	};

	p.windowResized = function () {
		const noRedraw = true;
		p.resizeCanvas(p.windowWidth, p.windowHeight, noRedraw);

		updateVars(p);
	};
};
new p5(s);
