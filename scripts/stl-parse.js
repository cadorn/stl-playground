
const PATH = require("path");
const FS = require("fs");
const STL_JS = require("stl-js");


function main(callback) {

	var stlPath = PATH.resolve(process.argv[2]);

	console.log("Using STL file:", stlPath);

	if (!FS.existsSync(stlPath)) {
		return callback(new Error("STL file '" + stlPath +"' not found"));
	}

	return STL_JS.readFile(stlPath, {}, function(err, polygon) {
		process.stdout.write(".");
		//console.log(polygon);
	}, function(err, solid) {
		if (err) return callback(err);

		process.stdout.write("\n");

		console.log("Polygons", solid);

		return callback(null);
	});
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
