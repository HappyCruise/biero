<template>
  <div id="beerList">
  <ConfirmBox id="confirmBox" @handleConfirm="handleConfirm" ref="confirm" :beerID="beerToDelete"/>
  <div id="beersFoundContainer">
    <p v-if="beers.length">Oluita löydetty: {{ beers.length }}</p>
    <p v-if="noBeers">Oluita ei löytynyt.</p>
  </div>

  <table id="beerTable" v-if="beers.length">
    <thead id="beerTableHead">
    <tr>
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
      <th>Maku</th>
      <th>Tyyppi</th>
      <th></th>
      <th>Kuva</th>
    </tr>
    </thead>
    <BeerEdit v-if="editMode" :beer="beerToEdit" @editDone="editMode = false" />
    <tbody v-else id="beerListBody">
      <!--  Loop trough beers to fill table  -->
      <tr v-for="beer in beers" :key="beer.id" @click="toggleLargeRow(beer.id)"  class="beerRow-small">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td> {{ beer.kuvaus }}</td>
        <td> {{beer.maku }}</td>
        <td> {{beer.tyyppi}}</td>
        <td id="buttonContainer">
          <button v-if="adminMode" @click="editBeer(beer.id)">Edit</button>
          <button v-if="adminMode" @click="deleteBeer(beer.id)">Delete</button>
          <button v-else @click="addToList">Add to List</button>
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
import { deleteBeer } from '@/js/DatabaseCaller';
import ConfirmBox from '@/components/ConfirmBox';
export default{
	name: 'BeerList',
	components: {ConfirmBox, BeerEdit},
	props: {
		beers: Array,
		adminMode: Boolean,
	},
	data(){
		return {
			editMode: false,
			beerToEdit: {},
			beerToDelete: null,
			noBeers: false,
		};
	},
	watch: {
		beers(newVal){
			if(newVal.length === 0)
				this.noBeers = true;
			else
				this.noBeers = false;
		}
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
		},
		toggleLargeRow(id){
			let listBody = document.getElementById('beerListBody');
			let targetRow;
			let rowValue;
			for(let row of listBody.rows){
				rowValue = row.firstChild.innerText;
				if(rowValue == id){
					targetRow = row;
				}
			}
			targetRow.classList.toggle('beerRow-large');
			console.log(targetRow);
		/*	let targetRow = this.$refs['beerRow'+id];
			console.log(targetRow);
*/
		}
	}
};

</script>
<style scoped>
#beerList{
  position: relative;
}
#beerTable{
  padding: 10px;
  width: 100%;
  border-collapse: collapse;
}
thead{
  background: goldenrod;
  width: 100%;
}
th, td{
  padding-left: 5px;
}


tr td, tr th{
  text-align: left;
}
#imageButton{
  background: none;
  border: none;

}
.beerRow-large #olutImg{
  max-height: 160px;
}
#olutImg{
  max-height: 35px;
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
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

}

#buttonContainer button{
  border-radius: 5px;
}
.beerRow-small{
  height: 35px;
}
.beerRow-large{

}

</style>
