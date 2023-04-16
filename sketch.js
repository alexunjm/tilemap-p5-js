function setup() {
	VARS.BROWSER.WIDTH = windowWidth;
	VARS.BROWSER.HEIGHT = windowHeight;
	createCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT);
	console.log(VARS.BROWSER);
	// createCanvas(windowWidth, windowHeight);
	RESOURCE.fn.loadTileImages();
}

function draw() {
	background(VARS.CANVAS.BG_COLOR);

	image(RESOURCE.IMAGE.TILE[0], width / 2 - VARS.TILE.WIDTH / 2, 50);
}
