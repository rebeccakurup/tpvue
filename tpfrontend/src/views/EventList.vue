/* eslint-disable */

<template>
  <div>
    <br/>
    <h1 class="display-3">Zürich Temperature and Precipitation Records</h1>
    <br/>
    <br/>
    <table class="table table-bordered table-sm">
      <thead class="thead-dark">
        <tr>
          <th>Year</th>
          <th>Month</th>
          <th>Temperature (°C)</th>
          <th>Precipitation (mm)</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id" :event="event">
            <th>{{ event.year }}</th>
            <th>{{ event.month }}</th>
            <th>{{ event.temperature }}</th>
            <th>{{ event.precipitation }}</th>
          </tr>
        </tbody>
      </table>


    




  </div>
</template>

<script>
import axios from 'axios'

export default {
    
    data() {
      return {
        events: []
      }
    },
    
    created() {
        axios
        .get('http://localhost:3000/events')
        .then(response => {
          this.events = response.data
        }) 
        .catch(error => {
          console.log('There was an error:' + error.response)
        }) 
    }
}

</script>
