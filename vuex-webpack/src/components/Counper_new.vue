<template>
	<div>
		{{count}}
		<button @click="inc">+</button>
		<button @click="dec">-</button>
		<button @click="incB">如果奇数就+1</button>
		<button @click="incC">异步+1</button>
        <span>最近五条历史记录{{history}}</span>
	</div>
</template>
<script>
	import{mapGetters,mapActions} from 'vuex';
	export default{
		data:function(){
			return{}
		},
		computed:{
			count(){
				return this.$store.getters.count
			},
			history(){
				return this.$store.getters.history
			}
		},
		methods:{
			inc(){
				this.$store.commit('inc');
			},
			dec(){
				this.$store.commit('dec');
			},
			incB(){
				if((this.$store.state.count + 1) % 2 ===0){
					this.$store.commit('inc');
				}
			},
			incC(){
				setTimeout(()=>{
					this.$store.commit('inc');
				},2000)
			}
		}
	}
</script>
<style scoped>
	
</style>