<template>
  <div v-if="isVisible" class="confirmContainer">
    <h3>BEER {{beerID}} WILL BE DELETED, CONTINUE?</h3>
    <div id="button-container">
      <button @click="handleClick(true)" class="button">YES</button>
      <button @click="handleClick(false)" class="button">NO</button>
    </div>
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
.confirmContainer{

  background-color: rgb(218, 165, 32, 95%);
  color: black;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 25px 0;
  width: 350px;

}
#button-container{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.button{
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid gray;
}
</style>