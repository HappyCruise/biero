<template>
  <div>
    <h3>Create a beer</h3>
    <form onsubmit="return false">
      <input type="text" v-model="beerToAdd.nimi">
      <textarea type="text" v-model="beerToAdd.kuvaus"> </textarea>
      <input type="text" v-model="beerToAdd.maku" >
      <input type="number" v-model="beerToAdd.tyyppi">
      <input type="text" v-model="beerToAdd.kuvaURL">
      <button type="submit" @click="addBeer">Create</button>
    </form>
    <div v-if="failedCreate">
      {{failMessage}}
    </div>
  </div>
</template>
<script>
import {createBeer} from '@/js/DatabaseCaller';

export default{
	name: 'BeerCreate',
	data(){
		return {
			beerToAdd: {
				nimi:'',
				kuvaus:'',
				maku:'',
				tyyppi:'',
				kuvaURL:''
			},
			failedCreate: false,
			failMessage: ''
		};
	},
	methods: {
		async addBeer(){
			console.log(this.beerToAdd);
			let beer = {...this.beerToAdd};
			console.log(beer);
			let response = await createBeer(beer);
			if(response.status !== 200){
				this.failedCreate = true;
				this.failMessage = response.statusMessage;
			}else{
				this.$emit('createDone');
			}
		}
	}
};
</script>
<style scoped>

</style>