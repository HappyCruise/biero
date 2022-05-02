<template>
  <div id="header">
  <div id="header-container">

    <div id="button-container">
      <button class="button imgButton" @click="showOwnList">
        <!-- Icon from https://icons8.com/  -->
        <img id="button-image" :src="require(`@/assets/listIcon.png`)" />
      </button>

      <div class="toggle-button-container">
        <label id="modeText" for="modeButton">{{ modeButtonText}}</label>
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
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

}
.button{
  border-radius: 15%;
  height: 25px;
  width: 50px;
  background-color: lightgray;
}
.toggle-button-container{
  border-radius: 3px;
  color: black;
  height: 25px;
  width: 100px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  align-items: center;

  font-family: "Bahnschrift";
  font-size:large;
  background-color: lightgray;

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
#modeText{
  flex: 1;
  text-align: left;
}
</style>
