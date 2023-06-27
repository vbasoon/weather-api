<template>
  <div
    class="weather"
    :class="typeof weather?.main !='undefined'"
    &&
    (weather?.main.temp
    -
    273.15)
  >
    16 ? "warn : ''"
    <main>
      <div class="search-box">
        <input 
          id="city" 
          v-model="city" 
          type="text"
          name=""
          class="search-bar"
          placeholder="Input City's name here..."
          @keyup.enter="fetchData"
        >
      </div>
      <div v-if="weather?.main" class="weather-container">
        <div class="weather-wrapper">
            <div class="location-box">
                <div class="location">
                    {{ weather?.name }}, {{ weather.sys.country }}  
                    <div class="date">
                        {{ dateBuilder( ) }}
                    </div>                  
                </div>
            </div>
            <div class="weather-box">
                <div class="temp">{{ (weather?.main.temp - 273.15).toFixed(1) }}</div>
                <div class="weather">{{ weather?.weather[0].main }}</div>
            </div>

        </div>

      </div>
    </main>
  </div>
</template>
  
  <script>
  import { useWeatherStore } from '@/store'
    import {computed, defineComponent,ref} from 'vue'
  
  export default defineComponent({
    setup(){
  
        const city = ref('')
        const store = useWeatherStore()
        const weather = computed(() => {
            return store.weatherData;
        });
        
        function fetchData() {
            store.getWeatherData(city.value)
        }

        function dateBuilder () {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
    }


      return{
        city,
        weather,
        fetchData,
        dateBuilder
      }
    }
  })
  </script>
  
  <style scoped>
    .weather {
        background-image: url('../assets/cold-bg.jpg');
        background-size: cover;
        background-position: bottom;
        transition: .4s;
    }

    .weather.warm {
        background-image: url('../assets/warm-bg.jpg');
    }

    .search-box {
        width: 100%;
        margin-bottom: 30px;
    }

    .search-box .search-bar {
        display: block;
        width: 100%;
        padding: 15px;
        color: #313131;
        font-size: 20px;
        appearance: none;
        border: none;
        outline: none;
        box-shadow: 0 0 8px rgba(0, 0 , 0, 0.25);
        background-color: rgba(0, 0 , 0, 0.5);
        border-radius: 0 16px 0 16px;
    }

    .search-box .search-bar:focus {
        
        box-shadow: 0 0 16px rgba(0, 0 , 0, 0.25);
        background-color: rgba(0, 0 , 0, 0.75);
        border-radius: 16px 0 16px 0;
    }

    .location-box .location {
        color: #fff;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        text-shadow: 1px 3px rgba(0, 0 , 0, 0.25);
    }

    .location-box .date {
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        font-style: italic;
        text-align: center;
    }

    .weather-box {
        text-align: center;
    }

    .weather-box .temp {
        display: inline-block;
        padding: 10px 25px;
        color: #fff;
        font-size: 102px;
        font-weight: 900;
        text-shadow: 3px 6px rgba(0, 0 , 0, 0.25);
        background-color: rgba(0, 0 , 0, 0.25);
        border-radius: 16px;
        

    }
  
  </style>
  