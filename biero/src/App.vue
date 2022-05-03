<template>
  <div id="app">
    <HeaderBar />
    <FrontPage ref="frontPage" :title="'Biero'" />
    <FooterBar id="footerBar"/>
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
	setup(){
		document.body.classList.add('VueBody');
		console.log('yee');
	}

};
</script>

<style>
/* Mobile */
@media (max-width: 480px){
  #app{
    width: 320px;
  }
}

.VueBody{
  margin: 0 !important;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
#footerBar{
  width: 100%;
}

</style>
