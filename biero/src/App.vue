<template>
  <div id="app">
    <HeaderBar />
    <FrontPage ref="frontPage" :title="'Biero'" />
    <FooterBar />
  </div>
</template>

<script>

import FrontPage from '@/components/FrontPage';
import FooterBar from '@/components/FooterBar';
import HeaderBar from '@/components/HeaderBar';

export default {
	name: 'App',
	components: {
		HeaderBar,
		FooterBar,
		FrontPage,
	},
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
