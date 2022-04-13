<template>
  <div>
    <form>
      <h2 id="title">{{ searchTitle }}</h2>
      <label for="helloInput">{{text}}</label>
      <input id="helloInput" v-model="text" />

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
			text: 'Hello'
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
