<template>
  <div>
  <table>
    <thead>
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
      <th>Maku</th>
    </thead>
    <tbody>
      <!--  Loop trough beers to fill table  -->
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td> {{ beer.kuvaus }}</td>
        <td> {{beer.maku }}</td>
        <td> {{beer.tyyppi}}</td>
        <img class="olut-img" :src=beer.kuvaURL >

        <button v-if="adminMode">Edit</button>
        <button v-if="adminMode">Delete</button>
        <button v-else>Add</button>
      </tr>
    </tbody>
    <p v-if="beers.length">Beers found: {{ beers.length }}</p>
    <p v-if="beers.length === 0">No beers found!</p>
  </table>
  </div>
</template>
<script>

export default{
	name: 'BeerList',
	props: {
		beers: Array,
		adminMode: Boolean
		
	}
};

</script>
<style scoped>
.olut-img{
  width: 20px;

}
</style>
