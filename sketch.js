// preload runs once before setup
function preload() {
	RESOURCE.fn.loadTileImages();
}
// setup runs once before draw
function setup() {
	VARS.BROWSER.WIDTH = windowWidth;
	VARS.BROWSER.HEIGHT = windowHeight;
	createCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT);

	windowResized();
	// draws per second
	frameRate(1);

	background(VARS.CANVAS.BG_COLOR);
	RESOURCE.fn.drawTileGrid();

	RESOURCE.BUTTON.fn.create(
		"Random BG",
		{ x: 0, y: 0 },
		VARS.CANVAS.fn.changeBG
	);
}

// loop fn
function draw() {
	background(VARS.CANVAS.BG_COLOR);

	RESOURCE.fn.drawTileGrid();
}

function windowResized() {
	const noRedraw = true;
	resizeCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT, noRedraw);

	updateVars();
}
