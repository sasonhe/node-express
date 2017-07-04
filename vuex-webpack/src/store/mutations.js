"use strict";
export default{
	inc:function(state){
		state.count += 1;
		state.history.push('inc');
	},
	dec:function(state){
		state.count -= 1;
		state.history.push('dec');
	},
	addItem:function(state){
		state.list.push(Math.random());
	},
	pushList:function(state,t){
		state.list = t;
	}
}