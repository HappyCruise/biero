<template>

  <div id="beerList">
  <ConfirmBox id="confirmBox" @handleConfirm="handleConfirm" ref="confirm" :beerID="beerToDelete"/>
  <div id="beersFoundContainer">
    <p v-if="beers.length">Oluita löydetty: {{ beers.length }}</p>
    <p v-if="noBeers">Oluita ei löytynyt.</p>
  </div>
  <BeerEdit v-if="editMode" :beer="beerToEdit" @editDone="editMode = false" />

    <BeerCreate v-if="createMode" @createDone="createMode = false" />

  <table id="beerTable" v-else-if="beers.length">
    <thead id="beerTableHead">
    <tr class="row">
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
      <th>Maku</th>
      <th>Tyyppi</th>
      <th></th>
      <th></th>
    </tr>
    </thead>

    <tbody id="beerListBody">
      <!--  Loop trough beers to fill table  -->
      <tr v-for="beer in beers" :key="beer.id" class="beerRow-small row">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td><span class="description"> {{ beer.kuvaus }}</span> </td>
        <td> {{beer.maku }}</td>
        <td> {{beer.tyyppi}}</td>

        <td id="buttonContainer">
          <button class="adminButton" v-if="adminMode" @click="editBeer(beer.id)">Muokkaa</button>
          <button class="adminButton deleteButton" v-if="adminMode" @click="deleteBeer(beer.id)">Poista</button>
          <button v-else @click="addToList(beer.id)" id="addtoListButton">
            <!-- Icon from   https://icons8.com/          -->
            <img id="addListIcon" :src="require(`@/assets/addToListIcon.png`)"  />
          </button>
          <button v-if="adminMode" @click="createBeer()">Create</button>
          <button @click="deleteFromList(beer.id)">Delete from list</button>
        </td>
        <td>
          <button id="imageButton">
            <img id="olutImg" :ref="beer.id" :src=beer.kuvaURL >
          </button>
        </td>

      </tr>
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
import { deleteFromList } from '@/js/DatabaseCaller';
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
			beerOffList: null
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
		},
		deleteFromList(id) {
			deleteFromList(id);
		}
	}
};

</script>
<style scoped>
.adminButton{
  background-color: white;
  height: 25px;
  font-size: 0.7rem;
  box-shadow: 0 0 10px darkgreen;
}
.deleteButton{
  box-shadow: 0 0 8px red;
}
.deleteButton:hover{
  box-shadow: 0 0 4px red inset !important;
}
.adminButton:hover{
  box-shadow: 0 0 4px darkgreen inset;
}

#beerTable{
  padding: 10px;
  width: 100%;
  border-collapse: collapse;
}
#beerTableHead tr{
  background: goldenrod;
  width: 100%;
  border-radius: 25%;
  overflow: hidden;
  border-collapse: separate;
}
.beerRow-small td{
  padding: 5px 10px;
}
th{
  padding: 10px 10px

}
#addListIcon{

}
.beerRow-small:hover #imageButton{

}

.beerRow-small:hover .description{
  margin: 0;
  white-space: initial;
}
.beerRow-small:hover  #buttonContainer{
  width: 100px;
  display: inline-flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
}




.description{
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 240px;
}
tr td, tr th{
  text-align: left;
}
#imageButton{
  background: none;
  border: none;
}

#confirmBox{
  position: absolute;
  left: 25%;
  top: 0;
}
#beersFoundContainer{
  margin: 0;
  padding: 0;
}
#buttonContainer{
  display: none;
}

.beerRow-small{
  height: 35px;
}
.beerRow-small:hover{
  background-color: lightgoldenrodyellow;
}
.beerRow-small:hover .description{
  height: 140px;
  display: inline;
}
.beerRow-small:hover #olutImg{
  max-height: 140px;
}
#olutImg{
  max-height: 35px;
}

button{
  border: none;
  border-radius: 5px;
}


.row th:first-child, .row td:first-child{

  width: 5%;
}
.row th:nth-child(2), .row td:nth-child(2){

  width: 10%;
}
.row th:nth-child(3), .row td:nth-child(3) {
  width: 30%;
}
.row th:nth-child(4), .row td:nth-child(4) {
  width: 10%;
}
.row th:nth-child(5), .row td:nth-child(5) {
  width: 10%;
}
.row th:nth-child(6), .row td:nth-child(6) {
  width: 35%;
}
</style>
