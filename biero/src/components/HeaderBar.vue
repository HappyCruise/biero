<template>
  <div id="header">
  <div id="header-container">
<!--    <button @click="$emit('showUserBeerList')">My List</button>-->
    <button @click="showOwnList">Oma Lista</button>
  </div>
  </div>
</template>
<script>

export default{
	name: 'HeaderBar',
	methods:{
		showOwnList(){
			this.$root.$refs.frontPage.showUsersList();
		}
	}
};
</script>
<style scoped>
#header{
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  background-color: lightgoldenrodyellow;
  height: 50px;
}
</style>
