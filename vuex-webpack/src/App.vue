<template>
	<div class="a">
		<button @click="testClick">改变 a 值</button>
		<div class="b">
			<span>这是 a 值 ： {{a}}</span>
		</div>
		<List></List>
	</div>
</template>
<script>
	import List from './components/List.vue'
	import Counper from './components/Counper.vue'

	export default{
		date:function(){
			return{
				a:1
			}
		},
		components:{
			List,
			Counper
		},
		methods:{
			testClick(){
				this.a = Math.random()
			}
		}
	}
</script>
<style scoped>
	.a{background: indianred}
	.b{background: deepskyblue;}
</style>