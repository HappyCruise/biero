<template>
  <div id="app">
    <FrontPage :title="'Biero'" />
  </div>
</template>

<script>

import FrontPage from '@/components/FrontPage';

export default {
	name: 'App',
	components: {
		FrontPage,
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
  width: 720px;
  padding: 10px;
}
</style>
