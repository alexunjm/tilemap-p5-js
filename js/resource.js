const RESOURCE = {
	IMAGE: { TILE: new Array(35) },
	fn: {
		loadTileImages: (p) => {
			for (let index = 0; index < RESOURCE.IMAGE.TILE.length; index++) {
				RESOURCE.IMAGE.TILE[index] = p.loadImage(
					`./image/tile/tile-${index}.png`
				);
			}
		},
		drawTile: (p, img, xTileDim, yTileDim) => {
			const canvasDim = {
				x:
					VARS.TILE.X_ZERO +
					(xTileDim - yTileDim) * VARS.TILE.HALF_WIDTH,
				y:
					VARS.TILE.Y_ZERO +
					(xTileDim + yTileDim) * VARS.TILE.HALF_HEIGHT,
			};
			p.image(img, canvasDim.x, canvasDim.y);
		},
		drawTileGrid: (p) => {
			const tileGrid = [
				[14, 23, 23, 23, 23, 23, 23, 23, 23, 13],
				[21, 32, 33, 33, 28, 33, 28, 33, 31, 20],
				[21, 34, 0, 0, 25, 33, 30, 1, 34, 20],
				[21, 34, 0, 0, 34, 1, 1, 10, 34, 20],
				[21, 25, 33, 33, 24, 33, 33, 33, 27, 20],
				[21, 34, 4, 7, 34, 18, 17, 10, 34, 20],
				[21, 34, 4, 7, 34, 16, 19, 10, 34, 20],
				[21, 34, 6, 8, 34, 10, 10, 10, 34, 20],
				[21, 29, 33, 33, 26, 33, 33, 33, 30, 20],
				[11, 22, 22, 22, 22, 22, 22, 22, 22, 12],
			];
			const gridSize = tileGrid.length;

			for (let row = 0; row < gridSize; row++) {
				for (let col = 0; col < gridSize; col++) {
					RESOURCE.fn.drawTile(
						p,
						RESOURCE.IMAGE.TILE[tileGrid[col][row]],
						row,
						col
					);
				}
			}
		},
	},
};
