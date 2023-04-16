const VARS = {
	BROWSER: {
		WIDTH: 420,
		HEIGHT: 210,
	},
	CANVAS: {
		BG_COLOR: "black",
		WIDTH: 420,
		HEIGHT: 210,
	},
	TILE: {
		WIDTH: 100,
		HEIGHT: 50,
		HALF_WIDTH: 50,
		HALF_HEIGHT: 25,
		X_ZERO: 50,
		Y_ZERO: 50,
		fn: {
			calculateX0: (yTileDim) => {
				return VARS.TILE.X_ZERO - yTileDim * VARS.TILE.HALF_WIDTH;
			},
			calculateY0: (xTileDim) => {
				return VARS.TILE.Y_ZERO + xTileDim * VARS.TILE.HALF_HEIGHT;
			},
		},
	},
	fn: {
		updateDimensions: ({ dimBrowser, dimCanvas }) => {
			VARS.BROWSER.WIDTH = dimBrowser.width;
			VARS.BROWSER.HEIGHT = dimBrowser.height;

			VARS.CANVAS.WIDTH = dimCanvas.width;
			VARS.CANVAS.HEIGHT = dimCanvas.height;

			VARS.TILE.X_ZERO = VARS.CANVAS.WIDTH / 2 - VARS.TILE.WIDTH / 2;
			// VARS.TILE.Y_ZERO = 50;
		},
	},
};