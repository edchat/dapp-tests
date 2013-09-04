require(["dapp/main", "dojo/text!./config.json"],
function(Application,config){
	Application(eval("(" + config + ")"));
});
