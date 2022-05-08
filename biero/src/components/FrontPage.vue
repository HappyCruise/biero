<template>
<div id="frontPageContainer">

  <SearchForm id="searchForm" @getBeer="findBeer" :searchTitle="title"/>
  <BeerList :beers="beers" :adminMode="adminMode" @getBeer="findBeer" />

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
			adminMode: false,
			modeButtonText: 'User',
		};
	},
	methods:{
		async findBeer(searchParam){
			let foundBeers = await getBeer(searchParam);
			this.beers = foundBeers;
			this.numberOfBeers = foundBeers.length;
		},
		/**
     * Toggle the admin mode and change the button text
     */
		toggleAdmin(){
			this.adminMode = !this.adminMode;
		},
		showUsersList: async function(){
			//TODO: CHANGE 1 TO USER ID
			let foundList = await getList(1);
			console.log(foundList);
			this.beers = foundList;
			this.numberOfBeers = foundList.length;
		}
	}
};
</script>
<style scoped>
#searchForm{
  margin-bottom: 10px;
}
#frontPageContainer{
  min-height: 80vh;

  margin: 60px auto;
  width: 720px;
  padding: 10px;
}
</style>