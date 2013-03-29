
const PATH = require("path");
const FS = require("fs");
const CANVAS = require("canvas");


function main(callback) {

	var stlPath = PATH.resolve(process.argv[2]);
	var pngPath = stlPath.replace(/\.stl$/, ".png");

	console.log("Using STL file:", stlPath);

	if (!FS.existsSync(stlPath)) {
		return callback(new Error("STL file '" + stlPath +"' not found"));
	}

	// @see https://github.com/learnboost/node-canvas

	var canvas = new CANVAS(320, 320);
	var ctx = canvas.getContext('2d');


	// TODO: Render polygons from STL in Canvas.

	var lingrad = ctx.createLinearGradient(0,0,0,150);
	lingrad.addColorStop(0, '#00ABEB');
	lingrad.addColorStop(0.5, '#fff');
	lingrad.addColorStop(0.5, '#26C000');
	lingrad.addColorStop(1, '#fff');
	var lingrad2 = ctx.createLinearGradient(0,50,0,95);
	lingrad2.addColorStop(0.5, '#000');
	lingrad2.addColorStop(1, 'rgba(0,0,0,0)');
	ctx.fillStyle = lingrad;
	ctx.strokeStyle = lingrad2;
	ctx.fillRect(10,10,130,130);
	ctx.strokeRect(50,50,50,50);


	// Export canvas to PNG
	if (FS.existsSync(pngPath)) FS.unlinkSync(pngPath);
	var out = FS.createWriteStream(pngPath);
	out.on('close', function() {
		console.log("Exported PNG to:", pngPath);
		return callback(null);
	});
	var stream = canvas.createPNGStream();
	stream.pipe(out);
}


if (require.main === module) {
	main(function(err) {
		if (err) {
			console.error("ERROR", err.stack);
			process.exit(1);
		}
			process.exit(0);
	});
}
