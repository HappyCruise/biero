<template>
<div>
  <button @click="toggleAdmin">Admin Mode</button>
  <SearchForm @getBeer="findBeer" :searchTitle="title" />
  <BeerList :beers="beers" :adminMode="adminMode" />

</div>
</template>
<script>
import SearchForm from '@/components/SearchForm';
import BeerList from '@/components/BeerList';
import {getBeer, getList } from '@/js/DatabaseCaller';

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
			adminMode: true
		};
	},
	methods:{
		async findBeer(searchParam){
			let foundBeers = await getBeer(searchParam);
			this.beers = foundBeers;
			this.numberOfBeers = foundBeers.length;
		},
		toggleAdmin(){
			this.adminMode = !this.adminMode;
		},
		showUsersList: async function(){
			//TODO: CHANGE 1 TO USER ID
			let foundList = await getList(1);
			this.beers = foundList;
			this.numberOfBeers = foundList.length;
		}
	}
};
</script>
<style>

</style>