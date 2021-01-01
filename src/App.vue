<template>
  <div id="app">
    <LeftSide></LeftSide>
    <PlayBar></PlayBar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  
    <router-view />
  </div>
</template>

<script>
import LeftSide from '@/components/LeftSideMenu'
import PlayBar from '@/components/PlayBar'

export default {
  components:{
    LeftSide,
    PlayBar,
  }
}
</script>




<style>
body{
  font-family: 'Times New Roman', Times, serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #121212;
}
#app
{
  
}
</style>
