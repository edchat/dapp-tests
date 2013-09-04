define(["dojo/_base/declare", "dapp/View", "dojox/dtl/_Templated"],
	function(declare, View, _Templated){
		return declare([_Templated, View], {
			_dijitTemplateCompat: true
		});
	}
);