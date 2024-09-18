<template>
  <v-container>
    <div class="image-grid">
      <v-img v-for="(image, index) in images" :key="index" :src="image.src" @click="selectedImage = image" />
    </div>

    <v-dialog v-model="showDialog" max-width="500">
      <v-card v-if="selectedImage">
        <v-img :src="selectedImage.src" />
        <v-card-text>{{ selectedImage.description }}</v-card-text>
        <v-btn @click="showDialog = false">Close</v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<!-- v-for loops through the images array to display each image in the grid. -->
<!-- v-on:click on each image sets the selectedImage to the clicked image object. -->
<!-- v-model on the v-dialog controls its visibility based on the showDialog variable. -->
<!-- v-if conditionally renders the modal content only when selectedImage is not null. -->
<!-- v-bind dynamically sets the src attribute of the image and displays the description. -->

<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://placehold.co/600x400/000000/FFF', description: 'Beautiful landscape' },
        { src: 'https://placehold.co/600x400/orange/white', description: 'Cute cat' },
      ],
      selectedImage: null,
      showDialog: false,
    };
  },
  //The watch property in Vue.js allows you to observe data changes and execute a function whenever the observed data changes. It's useful for reacting to data changes and performing side effects or asynchronous operations.
  watch: {
    selectedImage() {
      this.showDialog = this.selectedImage !== null;
    },
  },
};
</script>

<style>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.image-grid img {
  width: 100%;
  height: auto;
  object-fit: cover; 
  cursor: pointer;
  transition: transform 0.3s ease; 
}

.image-grid img:hover {
  transform: scale(1.05);
}
</style>
