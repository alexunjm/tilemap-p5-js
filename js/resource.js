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
	},
};
