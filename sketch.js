function setup() {
	VARS.BROWSER.WIDTH = windowWidth;
	VARS.BROWSER.HEIGHT = windowHeight;
	createCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT);
	windowResized();
	RESOURCE.fn.loadTileImages();
}

function draw() {
	background(VARS.CANVAS.BG_COLOR);

	RESOURCE.fn.drawTileGrid();
}

function windowResized() {
	const noRedraw = true;
	resizeCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT, noRedraw);

	updateVars();
}
