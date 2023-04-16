function setup() {
	VARS.BROWSER.WIDTH = windowWidth;
	VARS.BROWSER.HEIGHT = windowHeight;
	createCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT);
	console.log(VARS.BROWSER);
	// createCanvas(windowWidth, windowHeight);
	RESOURCE.fn.loadTileImages();
}

function draw() {
	VARS.fn.updateDimensions({
		dimBrowser: {
			width: windowWidth,
			height: windowHeight,
		},
		dimCanvas: {
			width: width,
			height: height,
		},
	});
	background(VARS.CANVAS.BG_COLOR);

	RESOURCE.fn.drawTile(RESOURCE.IMAGE.TILE[0], 0, 0);
	RESOURCE.fn.drawTile(RESOURCE.IMAGE.TILE[0], 1, 0);
	RESOURCE.fn.drawTile(RESOURCE.IMAGE.TILE[0], 2, 0);
}
