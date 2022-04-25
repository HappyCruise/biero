<template>
<div>
  <SearchForm @getBeer="findBeer" :searchTitle="title" />
  <BeerList :beers="beers" />
  <p v-if="numberOfBeers">Beers found: {{ numberOfBeers }}</p>
</div>
</template>
<script>
import SearchForm from '@/components/SearchForm';
import BeerList from '@/components/BeerList';
import {getAllBeers, getBeer} from '@/js/DatabaseCaller';

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
		async findBeer(searchParam){
			console.log(searchParam);
			let foundBeers = await getBeer(searchParam);
			this.beers = foundBeers;
			this.numberOfBeers = foundBeers.length;
		}
		,
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