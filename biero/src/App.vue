<template>
  <div id="app">
    <SearchForm :searchTitle="'Biero'" />
    <BeerList />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import BeerList from '@/components/BeerList';

export default {
	name: 'App',
	components: {
		BeerList,
		SearchForm
	}
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 980px;
}
</style>
