<template>
  <div>
    <h3>Edit a beer</h3>
    <form onsubmit="return false">
      <input type="text" v-model="updatedBeer.nimi">
      <textarea type="text" v-model="updatedBeer.kuvaus"> </textarea>
      <input type="text" v-model="updatedBeer.maku" >
      <input type="number" v-model="updatedBeer.tyyppi">
      <input type="text" v-model="updatedBeer.kuvaURL">
      <button type="submit" @click="updateBeer">Update</button>
    </form>
    <div v-if="failedUpdate">
      {{failMessage}}
    </div>
  </div>
</template>
<script>
import {editBeer} from '@/js/DatabaseCaller';

export default{
	name: 'BeerEdit',
	props:{
		beer: Object
	},
	data(){
		return {
			updatedBeer: this.beer,
			failedUpdate: false,
			failMessage: ''
		};
	},
	methods: {
		async updateBeer(){
			let response = await editBeer(this.updatedBeer);
			if(response.status !== 200){
				this.failedUpdate = true;
				this.failMessage = response.statusMessage;
			}else{
				this.$emit('editDone');
			}
		}
	}
};
</script>
<style scoped>

</style>