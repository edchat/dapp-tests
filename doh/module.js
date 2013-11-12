define([
	"require",
	"doh/runner"
], function(require, doh){
	try{
		var userArgs = window.location.search.replace(/[\?&](dojoUrl|testUrl|testModule)=[^&]*/g, "").replace(/^&/, "?");
		// DOH
		doh.registerUrl("dapp-tests.doh.lifecycleTest", require.toUrl("./lifecycleTest/" + userArgs), 999999);
		doh.registerUrl("dapp-tests.doh.hasConfigTest", require.toUrl("./hasConfigTest/" + userArgs), 999999);
	//	doh.registerUrl("dapp-tests.doh.simpleModelApp", require.toUrl("./simpleModelApp/" + userArgs), 999999);
		doh.registerUrl("dapp-tests.doh.globalizedApp", require.toUrl("./globalizedApp/" + userArgs), 999999);
		doh.registerUrl("dapp-tests.doh.borderLayoutApp", require.toUrl("./borderLayoutApp/" + userArgs), 999999);
		doh.registerUrl("dapp-tests.doh.layoutApp", require.toUrl("./layoutApp/" + userArgs), 999999);
		doh.registerUrl("dapp-tests.doh.mediaQuery3ColumnApp", require.toUrl("./mediaQuery3ColumnApp/" + userArgs), 999999);
	}catch(e){
		doh.debug(e);
	}
});
