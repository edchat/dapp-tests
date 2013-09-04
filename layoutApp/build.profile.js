require(["dapp/build/buildControlApp"], function(bc){
});

var profile = {
	basePath: "..",
	releaseDir: "./layoutApp/release",
	action: "release",
	cssOptimize: "comments",
/*	multipleAppConfigLayers: true,*/
	packages:[{
		name: "dojo",
		location: "../../../dojo"
	},{
		name: "dijit",
		location: "../../../dijit"
	},{
		name: "layoutApp",
		location: "../../../dapp-tests/layoutApp",
		destLocation: "./dapp/tests/layoutApp"
	},{
		name: "dojox",
		location: "../../../dojox"
	}],
	layers: {
		"layoutApp/layoutApp": {
			include: [ "layoutApp/index.html" ]
		}
	}
};



