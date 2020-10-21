<template>
  <div id="app">
    <Encoder class="encode"></Encoder>
  </div>
</template>

<script>
import Encoder from './components/Encoder.vue';

export default {
  name: 'App',
  components: {
    Encoder
  }
}
</script>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }

  .encode {
    align-self: center;
  }
</style>
