const RESOURCE = {
	IMAGE: { TILE: [] },
	fn: {
		loadTileImages: () => {
			[
				"./image/tile/grass.png",
				"./image/tile/sand.png",
				"./image/tile/water.png",
			].forEach((path) => {
				RESOURCE.IMAGE.TILE.push(loadImage(path));
			});
		},
		drawTile: (img, xTileDim, yTileDim) => {
			const canvasDim = {
				x:
					VARS.TILE.fn.calculateX0(yTileDim) +
					xTileDim * VARS.TILE.HALF_WIDTH,
				y:
					VARS.TILE.fn.calculateY0(xTileDim) +
					yTileDim * VARS.TILE.HALF_HEIGHT,
			};
			image(img, canvasDim.x, canvasDim.y);
		},
	},
};
