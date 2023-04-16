function setup() {
	VARS.BROWSER.WIDTH = windowWidth;
	VARS.BROWSER.HEIGHT = windowHeight;
	createCanvas(VARS.BROWSER.WIDTH, VARS.BROWSER.HEIGHT);
	windowResized();
	RESOURCE.fn.loadTileImages();
}

function draw() {
	background(VARS.CANVAS.BG_COLOR);

	drawGrid();
}

function windowResized() {
	const noRedraw = true;
	resizeCanvas(windowWidth, windowHeight, noRedraw);

	updateVars();
}

function drawGrid() {
	const tileGrid = [
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 0, 0, 1, 0, 0, 0, 0, 0, 2],
		[2, 0, 0, 1, 0, 0, 0, 0, 0, 2],
		[2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 0, 0, 0, 0, 0, 0, 1, 0, 2],
		[2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];
	const gridSize = tileGrid.length;

	for (let j = 0; j < gridSize; j++) {
		for (let i = 0; i < gridSize; i++) {
			RESOURCE.fn.drawTile(RESOURCE.IMAGE.TILE[tileGrid[i][j]], i, j);
		}
	}
}
