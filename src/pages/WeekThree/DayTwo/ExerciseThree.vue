<template>
  <div class="responsive">

    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>

    <div class="container">
      <v-row>
        <v-col cols="12" sm="6" md="4"> 
          <div class="card">Card 1</div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="card">Card 2</div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="card">Card 3</div>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<style>
.responsive {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;
}

nav {
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  max-width: 1200px;
}

.card {
  background-color: black;
  border-radius: 5px;
  border-color: white;
  border-style: solid;
  border-width: 2px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>