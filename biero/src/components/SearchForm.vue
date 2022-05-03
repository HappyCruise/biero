<template>
  <div>
    <h2 id="title">{{ searchTitle }}</h2>
    <form onsubmit="return false" id="searchBar">


      <input id="searchInput" v-model="searchParam" placeholder="Etsi oluita"/>
      <button id="searchButton" @click="$emit('getBeer', searchParam)">
        <!-- Icon from https://icons8.com/  -->
        <img id="button-image" :src="require(`@/assets/searchIcon.png`)" />
      </button>
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
			searchParam: ''
		};
	}
};
</script>
<style scoped>
/* Mobile */
@media (max-width: 480px) {
  #searchInput {
    width: 80%;
  }
}
#title{
  font-family: Bahnschrift;
  font-weight: bold;
  font-size: 5rem;
  color: goldenrod;
  margin-bottom: 10px;
}
#searchBar{
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
}
#searchButton{
  background: none;
  border: none;

}
#button-image{

  width: 40px;
  height: 40px;

}

#searchInput{
  flex: 1;

  height: 30px;
  border-radius: 10px;
  border: 1px gray solid;
  padding-left: 10px;


}
</style>
