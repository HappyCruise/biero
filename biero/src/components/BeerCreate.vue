<template>
  <div>

    <h3>Create a beer</h3>
    <form onsubmit="return false" id="createForm">

      <div class="createFormSection">
        <span>Nimi</span>
        <input type="text" placeholder="Nimi" v-model="beerToAdd.nimi">


        <span>Maku</span>
        <input type="text" placeholder="Maku" v-model="beerToAdd.maku" >

        <span>Kuvaus</span>
        <textarea type="text" placeholder="Kuvaus" v-model="beerToAdd.kuvaus"> </textarea>
      </div>

      <div class ="createFormSection">

        <span>Tyyppi</span>
        <select v-model="beerToAdd.tyyppi">
          <option></option>
          <option value="Tumma">Tumma</option>
          <option value="Vaalea">Vaalea</option>
          <option value="IPA">IPA</option>
        </select>

        <span>Kuva URL</span>
        <input type="text" placeholder="Kuvan Url" v-model="beerToAdd.kuvaURL">

        <div id="buttonSection">
          <button id="createButton" type="submit" @click="addBeer">Create</button>
          <button @click="$emit('editDone')" id="returnButton" >
            <!-- Icon from https://icons8.com/  -->
            <img id="returnImage" :src="require(`@/assets/returnIcon.png`)" />
          </button>
        </div>
      </div>
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
#buttonSection{
  margin-top: 25px;
  display: flex;
  justify-content: end;
  gap: 10px;
}

#createButton{
  width: 80px;
  height: 40px;
}

#createForm{
  display: flex;
  flex-direction: row;
  gap: 10px;

}
.createFormSection{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.createFormSection span{
  margin-top: 10px;
  text-align: left;
}

#returnButton{
  background: none;
  border: none;
}
#returnImage{
  height: 40px;
}


</style>