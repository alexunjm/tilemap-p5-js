const VARS = {
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
		X_ZERO: 0,
		Y_ZERO: 50,
	},
	fn: {
		updateDimensions: ({ dimCanvas }) => {
			VARS.CANVAS.WIDTH = dimCanvas.width;
			VARS.CANVAS.HEIGHT = dimCanvas.height;

			VARS.TILE.X_ZERO =
				Math.round(VARS.CANVAS.WIDTH / 2) - VARS.TILE.WIDTH / 2;
		},
	},
};

function updateVars(p) {
	VARS.fn.updateDimensions({
		dimCanvas: {
			width: p.width,
			height: p.height,
		},
	});
}
