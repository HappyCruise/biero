<template>
  <div>
  <table>
    <thead>
      <th>ID</th>
      <th>Nimi</th>
      <th>Kuvaus</th>
    </thead>
    <tbody>
      <!--  Loop trough beers to fill table  -->
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{ beer.id }}</td>
        <td> {{ beer.nimi }}</td>
        <td> {{ beer.kuvaus }}</td>
      </tr>
    </tbody>

  </table>
  </div>
</template>
<script>

export default{
	name: 'BeerList',
	props: {
		beers: Array,
		numberOfBeers: Number
	}
};

</script>
<style scoped>

</style>
