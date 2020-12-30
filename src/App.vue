<template>
  <div id="app">
    <LeftSide></LeftSide>







      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  
    <router-view />
  </div>
</template>

<script>
import LeftSide from '@/components/LeftSideMenu'

export default {
  components:{
    LeftSide,
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
