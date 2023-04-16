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

	for (let j = 0; j < 3; j++) {
		for (let i = 0; i < 3; i++) {
			RESOURCE.fn.drawTile(RESOURCE.IMAGE.TILE[0], i, j);
		}
	}
}
