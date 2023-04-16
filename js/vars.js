const VARS = {
	BROWSER: {
		WIDTH: 420,
		HEIGHT: 210,
	},
	CANVAS: {
		BG_COLOR: "black",
		WIDTH: 420,
		HEIGHT: 210,
		fn: {
			changeBG: () => {
				if (isLooping()) {
					VARS.CANVAS.BG_COLOR = color(
						random(255),
						random(255),
						random(255)
					);
					noLoop();
					return;
				}
				loop();
			},
		},
	},
	TILE: {
		WIDTH: 100,
		HEIGHT: 50,
		HALF_WIDTH: 50,
		HALF_HEIGHT: 25,
		X_ZERO: 0,
		Y_ZERO: 50,
	},
	fn: {
		updateDimensions: ({ dimBrowser, dimCanvas }) => {
			VARS.BROWSER.WIDTH = dimBrowser.width;
			VARS.BROWSER.HEIGHT = dimBrowser.height;

			VARS.CANVAS.WIDTH = dimCanvas.width;
			VARS.CANVAS.HEIGHT = dimCanvas.height;

			VARS.TILE.X_ZERO =
				Math.round(VARS.CANVAS.WIDTH / 2) - VARS.TILE.WIDTH / 2;
		},
	},
};

function updateVars() {
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
}
