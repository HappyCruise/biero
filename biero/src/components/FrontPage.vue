<template>
<div>
  <SearchForm :searchTitle="title" />
  <button @click="getBeers">Get Beer</button>
  <BeerList :beers="beers" />
  <p v-if="numberOfBeers">Beers found: {{ numberOfBeers }}</p>
</div>
</template>
<script>
import SearchForm from '@/components/SearchForm';
import BeerList from '@/components/BeerList';
import {getAllBeers} from '@/js/DatabaseCaller';

export default {
	name: 'FrontPage',
	components: {BeerList, SearchForm},
	props: {
		title: String
	},
	data: function() {
		return {
			beers: [],
			numberOfBeers: null,
		};
	},
	methods:{
		getBeers(){
			getAllBeers().then(result => {
				this.beers = result;
				this.numberOfBeers = result.length;
			});
		}
	}
};
</script>
<style>

</style>