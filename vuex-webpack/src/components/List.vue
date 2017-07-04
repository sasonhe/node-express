<template>
	<div>
		<span>{{list.length}}</span>
		<div>
			<button @cilck="pushList">push</button>
			<button @cilck="replaceList">replace</button>
		</div>
		<div>
			<ul>
				<li v-for="item in list">{{item}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			list(){
				return this.$store.getters.list
			}
		},
		methods:{
			pushList(){
				this.$store.commit('addItem');
			}
		},
		replaceList(){
			var t = [],
				i = 0;
			while(i<7){
				t.push(Math.random());
				i++;
			}
			setTimeout(()=>{
				this.$store.commit('pushList',t)
			},1000)
		}
	}
</script>
<style scoped>
	
</style>