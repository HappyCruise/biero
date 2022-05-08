<template>

  <div id="beerList">

  <div id="beersFoundContainer">
    <p v-if="beers.length">Oluita löydetty: {{ beers.length }}</p>
    <p v-if="noBeers">Oluita ei löytynyt.</p>
  </div>
    <ConfirmBox id="confirmBox" @handleConfirm="handleConfirm" ref="confirm" :beerID="beerToDelete"/>
    <button v-if="adminMode" @click="createBeer()">Create</button>
  <div v-if="editMode || createMode">
    <BeerEdit v-if="editMode" :beer="beerToEdit" @editDone="editMode = false; $emit('getBeer', '')" />
    <BeerCreate v-else-if="createMode" @createDone="createMode = false; $emit('getBeer', '')" />
  </div>
  <table id="beerTable" v-else>
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
          <div id="adminButtonContainer" class="buttonInnerContainer" v-if="adminMode">
            <button class="adminButton deleteButton" @click="deleteBeer(beer.id)">Poista</button>
            <button class="adminButton" @click="editBeer(beer.id)">Muokkaa</button>
          </div>
          <div id="userButtonContainer" class ="buttonInnerContainer" v-else>
            <button @click="addToList(beer.id)" id="addtoListButton">
              <!-- Icon from   https://icons8.com/          -->
              <img id="addListIcon" :src="require(`@/assets/addToListIcon.png`)"  />
            </button>
            <button @click="deleteFromList(beer.id)">
              <!-- Icon from   https://icons8.com/          -->
              <img id="removeListIcon" :src="require(`@/assets/removeFromListIcon.png`)"  />
            </button>
          </div>
        </td>
        <td id="imageTD">
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
			this.editMode = true;
			console.log(id);
			for(let i=0; i<this.beers.length; i++){
				if(this.beers[i].id == id){
					this.beerToEdit = this.beers[i];
				}
			}
			console.log(this.beers);
		},
		handleConfirm(response){
			console.log('CONFIRMATION ' + response);
			if(response === true){
				deleteBeer(this.beerToDelete);
				this.$emit('getBeer', '');
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
<style scoped> .adminButton{
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
.beerRow-small:hover .description{
  margin: 0;
  white-space: initial;
}
.beerRow-small:hover #buttonContainer{
  display: inline-flex;
  height: 100%;
}
.buttonInnerContainer{
  display: inline-flex;
  gap: 5px;
  padding-right: 10px;
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
  position: fixed;
  left: 37%;
  top: 25%;
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
.beerRow-small:hover, .beerRow-small:hover #olutImg, .beerRow-small:hover #buttonContainer{
  max-height: 140px;
}
.beerRow-small:hover .description{
  display: inline;
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
