<template>
  <div id="beerList">
  <ConfirmBox id="confirmBox" @handleConfirm="handleConfirm" ref="confirm" :beerID="beerToDelete"/>
  <table id="beerTable">
    <thead>
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
      <th>Maku</th>
    </thead>
    <BeerEdit v-if="editMode" :beer="beerToEdit" @editDone="editMode = false" />
    <tbody v-else>
      <!--  Loop trough beers to fill table  -->
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td> {{ beer.kuvaus }}</td>
        <td> {{beer.maku }}</td>
        <td> {{beer.tyyppi}}</td>
        <img id="olutImg" :src=beer.kuvaURL >

        <button v-if="adminMode" @click="editBeer(beer.id)">Edit</button>
        <button v-if="adminMode" @click="deleteBeer(beer.id)">Delete</button>
        <button v-else @click="addToList">Add to List</button>

      </tr>
      <p v-if="beers.length">Beers found: {{ beers.length }}</p>
      <p v-if="beers.length === 0">No beers found!</p>
    </tbody>


  </table>
  </div>
</template>
<script>

import BeerEdit from '@/components/BeerEdit';
import { deleteBeer } from '@/js/DatabaseCaller';
import ConfirmBox from '@/components/ConfirmBox';
export default{
	name: 'BeerList',
	components: {ConfirmBox, BeerEdit},
	props: {
		beers: Array,
		adminMode: Boolean
	},
	data(){
		return {
			editMode: false,
			beerToEdit: {},
			beerToDelete: null
		};
	},
	methods: {
		editBeer(id){
			this.beerToEdit= this.beers[id -1];
			this.editMode = true;
		},
		handleConfirm(response){
			console.log('CONFIRMATION ' + response);
			if(response === true){
				deleteBeer(this.beerToDelete);
			}else{
				this.beerToDelete = null;
			}
		},
		deleteBeer(id){
			this.beerToDelete = id;
			let confirm = this.$refs.confirm;
			confirm.open();
		}
	}
};

</script>
<style scoped>
#beerList{
  position: relative;
  display: inline-block;
}
#olutImg{
  width: 20px;
}
#confirmBox{
  position: absolute;
  left: 20%;
  top: 0;
}

</style>
