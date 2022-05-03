<template>
  <div>
  <table>
    <thead>
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
      <th>Maku</th>
      <button v-if="adminMode" @click="createBeer()">Create</button>
    </thead>

    <BeerCreate v-if="createMode" @createDone="createMode = false" />
    <BeerEdit v-if="editMode" :beer="beerToEdit" @editDone="editMode = false" />

    <tbody v-else>
      <!--  Loop trough beers to fill table  -->
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td> {{ beer.kuvaus }}</td>
        <td> {{beer.maku }}</td>
        <td> {{beer.tyyppi}}</td>
        <img class="olut-img" :src=beer.kuvaURL >


        <button v-if="adminMode" @click="editBeer(beer.id)">Edit</button>
        <button v-if="adminMode" @click="deleteBeer(beer.id)">Delete</button>
        <button v-else @click="addToList(beer.id)">Add to List</button>

      </tr>
      <ConfirmBox @handleConfirm="handleConfirm" ref="confirm" :beerID="beerToDelete"/>
      <p v-if="beers.length">Beers found: {{ beers.length }}</p>
      <p v-if="beers.length === 0">No beers found!</p>
    </tbody>


  </table>
  </div>
</template>
<script>

import BeerEdit from '@/components/BeerEdit';
import BeerCreate from '@/components/BeerCreate';
import { deleteBeer } from '@/js/DatabaseCaller';
import ConfirmBox from '@/components/ConfirmBox';
import { addToList } from '@/js/DatabaseCaller';
export default{
	name: 'BeerList',
	components: {ConfirmBox, BeerEdit, BeerCreate},
	props: {
		beers: Array,
		adminMode: Boolean
	},
	data(){
		return {
			createMode: false,
			editMode: false,
			beerToEdit: {},
			beerToDelete: null,
			beerToList: {
				userid: 1,
				beerid:''
			}
		};
	},
	methods: {
		createBeer() {
			this.createMode = true;
		},
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
		},
		addToList(id) {
			addToList(1, id);
		}
	}
};

</script>
<style scoped>
.olut-img{
  width: 20px;

}
</style>
