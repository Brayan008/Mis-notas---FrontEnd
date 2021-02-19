<template>
  <div id="app">
    <div class="container-fluid">
      <Header></Header>
      <router-view></router-view>

      <Footer></Footer>
    </div>
    
  </div>
  
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";


export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}
</style>
