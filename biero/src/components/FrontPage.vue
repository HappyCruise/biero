<template>
<div>

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
			this.beers = foundList;
			this.numberOfBeers = foundList.length;
		}
	}
};
</script>
<style scoped>
#button-container{
  margin-left: auto;
}
#modeButton{
  border-radius: 30%;
  color: Black;
  height: 40px;
  width: 60px;
  text-align: center;
}
.userButton{
  background-color: lightskyblue;
  animation: toggleUser 2s 1;
  animation-direction: normal;
}

.adminButton {
  background-color: lightcoral;
  animation: toggleUser 2s 1;
  animation-direction: reverse;
}

@keyframes toggleUser {
 0% {background-color: lightcoral;}
 100% {background-color: lightskyblue;}
}
</style>