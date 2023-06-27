<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Header from "@/components/VueHeader.vue"

export default defineComponent({
  // eslint-disable-next-line
  components: {Header},
  setup(){

    return{
      Header
    }
  }
})
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  overflow-y: hidden;
  background-color: rgba(0,0,0,0.25);
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
}

</style>
