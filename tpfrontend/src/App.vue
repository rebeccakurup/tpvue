<template>
<div id=container>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </div>
    <router-view />
  </div>
</div>
</template>

<style>



#container {
  background-color: azure;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 75%;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(215, 250, 250);

  
}

#nav {
  padding: 5px;
  float: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #3ca877;
}

h1 {
  color: rgb(1, 75, 1)
}


thead {
  font-size: 2rem;
  border: solid;
}

tbody {
  font-size: 1.5rem;
}

th {
  border-bottom: solid;
}




</style>
