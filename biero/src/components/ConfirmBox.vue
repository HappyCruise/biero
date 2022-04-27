<template>
  <div v-if="isVisible">
    <h3>BEER {{beerID}} WILL BE DELETED, CONTINUE?</h3>
    <button @click="handleClick(true)">YES</button>
    <button @click="handleClick(false)">NO</button>
  </div>
</template>
<script>
export default{
	props: {
		beerID: Number
	},
	data(){
		return {
			isVisible: false
		};
	},
	methods:{
		open(){
			this.isVisible = true;
		},
		close(){
			this.isVisible = false;
		},
		handleClick(response){
			this.$emit('handleConfirm', response);
			this.close();
		}
	}
};
</script>
<style scoped>

</style>