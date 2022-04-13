<template>
  <div>
   <button @click="getAllBeers">Hae kaljaa</button>
  <table>
    <thead>
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
    </thead>
    <tbody>
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td> {{ beer.kuvaus }}</td>
      </tr>
    </tbody>

  </table>
  </div>
</template>
<script>
import {getAllBeers} from '@/DatabaseCaller';

export default{
	name: 'BeerList',
	data(){
		return{
			beers :[],
			numberOfBeers: 0
		};
	},
	methods:{
		getAllBeers() {
			getAllBeers().then(response => {
				this.beers = response;
				this.numberOfBeers = response.length;
			});
		}
	}
};

</script>
<style scoped>

</style>
