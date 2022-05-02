<template>
  <div id="header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="header-container">

    <div id="button-container">
      <button class="button imgButton" @click="showOwnList">
        <img id="button-image" :src="require(`@/assets/listIcon.png`)" />
      </button>

      <div class="toggle-button-container">
        <label for="modeButton">{{ modeButtonText}}</label>
        <button @click="toggleAdminMode"  class="button" id="modeButton" :class="{ adminButton: adminMode, userButton: !adminMode }"></button>
      </div>

    </div>
  </div>

  </div>
</template>

<script>

export default{
	name: 'HeaderBar',
	data(){
		return{
			adminMode: false,
			modeButtonText: 'User'
		};
	},
	methods:{
		showOwnList(){
			this.$root.$refs.frontPage.showUsersList();
		},
		toggleAdminMode(){
			this.$root.$refs.frontPage.toggleAdmin();
			this.adminMode = !this.adminMode;
			if(this.adminMode)
				this.modeButtonText = 'Admin';
			else
				this.modeButtonText = 'User';
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
}

#header, #button-container{
  height: 50px;
}
#button-image{

}
.imgButton{
  padding: 0;
  border: none;
}
#button-container{
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  padding-right: 1rem;

}
.button{
  border-radius: 15%;

  height: 25px;
  width: 50px;

}
.toggle-button-container{
  background-color: goldenrod;
  border-radius: 3px;
  color: black;
  height: 25px;
  width: 100px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  font-family: "Bahnschrift";
  font-size:large;

}
#modeButton{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid gray;
}
.adminButton{
  background-color: red;
}
.userButton{
  background-color: lawngreen;
}
</style>
