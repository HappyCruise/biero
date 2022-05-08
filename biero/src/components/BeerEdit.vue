<template>
  <div id="beerEdit">
    <h3>Muokkaa olutta {{ beer.id }}</h3>
    <form onsubmit="return false" id="editForm">
      <div class="editFormSection">
        <span>Nimi</span>
        <input type="text" v-model="updatedBeer.nimi" id="nimi" >

        <span>Maku</span>
        <input type="text" v-model="updatedBeer.maku" >

        <span>Kuvaus</span>
        <textarea type="text" v-model="updatedBeer.kuvaus" id="kuvaus"> </textarea>

      </div>
      <div class="editFormSection">
        <span>Tyyppi</span>
        <select v-model="updatedBeer.tyyppi">
          <option value="0"></option>
          <option value="1">Tumma</option>
          <option value="2">Vaalea</option>
          <option value="3">IPA</option>
        </select>

        <span>Kuva URL</span>
        <input type="text" v-model="updatedBeer.kuvaURL">
        <div id="buttonSection">
          <button type="submit" @click="updateBeer" id="updateButton" >Päivitä</button>
          <button @click="$emit('editDone')" id="returnButton" >
            <!-- Icon from https://icons8.com/  -->
            <img id="returnImage" :src="require(`@/assets/returnIcon.png`)" />
          </button>
        </div>

      </div>
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
			console.log('beeredit: ' +this.updatedBeer.tyyppi);
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
#beerEdit{

}
#buttonSection{
  margin-top: 25px;
  display: flex;
  justify-content:end;
  gap: 10px;
}
#updateButton{
  width: 80px;
  height: 40px;
}
#returnButton{
  background: none;
  border:none;
}
#returnImage{
  height: 40px;
}
#editForm{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.editFormSection{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.editFormSection span{
  margin-top: 10px;
  text-align: left;
}

</style>