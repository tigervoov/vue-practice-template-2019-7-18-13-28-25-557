<template>
  <div id="app">
    <colculate></colculate>
    <counter-group></counter-group>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import colculate from './components/colculate.vue'
import CounterGroup from './components/CounterGroup.vue'

export default {
  name: 'app',
  components: {
    colculate,
    CounterGroup,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
