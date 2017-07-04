"use strict";
export default{
	count:function(state){
		return state.count;
	},
	list:function(state){
		return state.count;
	},
	history:function(state){
		var limit = 5;
		var end = state.history.length;
		var begin = end - limit < 0 ? 0:end - limit
		return state.history
			.slice(begin,end)
			.toString()
			.replace(/,/g,',');
	}
}