define(["dojo/_base/lang", "dojo/on", "dijit/registry", "dojo/date/stamp"],
function(lang, on, registry, stamp){
	var _onResults = []; // events on array
	var opener;

	return {
		init: function(){
			opener = this.opener;
			var onResult = on(this.selDate1, "click", lang.hitch(this, function(){
				this.datePicker2.set("value", date);
				this.opener.show(this.selDate1, ['below-centered','above-centered','after','before']);
			})); 
			_onResults.push(onResult);

			var onResult = on(this.save, "click", lang.hitch(this, function(){
				this.opener.hide(true);
				date = this.selDate1.value = this.datePicker2.get("value");
			})); 
			_onResults.push(onResult);

			onResult = on(this.cancel, "click", lang.hitch(this, function(){
				this.opener.hide(false);
			})); 
			_onResults.push(onResult);

		//	onResult = on(this.unloadSimple, "click", lang.hitch(this, function(e){
				//test app.unloadView call
			//	var view = this.parent.children.layoutApp2_simple;
		//		this.app.unloadView(this.parent.children.layoutApp2_simple, this.unloadCallback);
			//	view = null;
			/*
				var params = {};
				params.parent = this.parent;
				var view = this.parent.children.layoutApp2_simple;
				params.view = view;
			//	params.viewId = view.id;
				this.app.emit("app-unload-view", params);
				*/
		//	}));
		//	_onResults.push(onResult);

		//	onResult = on(this.unloadList, "click", lang.hitch(this, function(e){
			//	var view = this.parent.children.layoutApp2_listMain;
		//		this.app.unloadView(this.parent.children.layoutApp2_listMain, this.unloadCallback);
			//	view = null;
			/*
				var params = {};
				params.parent = this.parent;
				var view = this.parent.children.layoutApp2_listMain;
				params.view = view;
				//params.viewId = view.id;
				this.app.emit("app-unload-view", params);
				*/
		//	}));
		//	_onResults.push(onResult);

			// initialize the global Date variable as today
			date = stamp.toISOString(new Date(), {selector: "date"});
		},

		unloadCallback: function(){
			console.log("date.js unloadCallback called unloaded this.view.id="+this.view.id);
			this.view = null;
		},

		beforeActivate: function(){
			//console.log("date view beforeActivate()");
		},

		afterActivate: function(){
			console.log(" date.js afterActivate registry.length = ["+registry.length+"] for view =["+this.id+"]");

		},


		// view destroy
		destroy: function(){
			var onResult = _onResults.pop();
			while(onResult){
				onResult.remove();
				onResult = _onResults.pop();
			}
		}
	};
	
});
