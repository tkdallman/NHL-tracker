<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="scss">

html {
  background: #85B5B1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 1000px;
}

li {
  list-style-type: none;
}

.btn {
  color: #fff;
    background: rgb(138, 43, 138);
    padding: 5px 10px;
    font-weight: 800;
    box-shadow: 2px 2px 3px grey;
    text-decoration: none;
}

.info-card {
  padding: 16px;
  margin: 16px;
  border: 1px solid black;
  background:#fdfffb;
  box-shadow: 3px 2px 11px grey;
  border-radius: 5px;
}

</style>
