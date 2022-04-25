<template>
  <div>
    <form onsubmit="return false">
      <h2 id="title">{{ searchTitle }}</h2>
      <label for="helloInput">{{searchParam}}</label>
      <input id="helloInput" v-model="searchParam" />
      <button @click="$emit('getBeer', searchParam)">Get Beer</button>
    </form>
  </div>
</template>
<script>
export default {
	props: {
		searchTitle: String
	},
	data(){
		return{
			searchParam: 'Hello'
		};
	}
};
</script>
<style scoped>
#title{
  font-family: Bahnschrift;
  font-weight: bold;
  font-size: 3rem;
  color: goldenrod;
}
</style>
