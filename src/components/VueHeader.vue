<template>
  <header>
    <div class="header-container">
      <div class="logo-container">
        <a
          href="#"
          @click="goToMain"
        >Mini Weather App</a>
      </div>
      <nav>
        <div class="nav-menu">
          <a
            href="#"
            @click="goToMain"
          >Main</a>
          <a
            href="#"
            @click="goToAbout"
          >About</a>
        </div>  
      </nav>
    </div>
  </header>
</template>
  
  <script>
  import {defineComponent} from 'vue'
  import {useRouter} from 'vue-router'
  
  export default defineComponent({
    setup(){
        const router = useRouter()

        const goToMain = () => {
            router.push({name: "Main"})
        }

        const goToAbout = () => {
            router.push({name: "About"})
        }

      return{
        goToMain,
        goToAbout
      }
    }
  })
  </script>
  
  <style scoped>

  .logo-container {
    font-weight: 600;
  }

  .header-container {
    
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: space-between;
    padding: 23px 28px;
    font-size: 18px;

    background-color: #b6c4d5;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    gap: 20px;
  }
  
  </style>