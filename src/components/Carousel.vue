<template>
  <v-container>
    <v-carousel
      v-model="currentSlide"
      height="400"
      hide-delimiters
      ref="myCarousel"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img :src="item.src" cover></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: 'https://picsum.photos/id/1015/1000/400' },
        { src: 'https://picsum.photos/id/1016/1000/400' },
        { src: 'https://picsum.photos/id/1019/1000/400' },
      ],
      currentSlide: 0,
      carouselInterval: null,
    };
  },
  beforeMount() {
    console.log('beforeMount hook executed');
    console.log('Carousel element in beforeMount:', this.$refs.myCarousel);
  },
  mounted() {
    console.log('mounted hook executed');
    console.log('Carousel element in mounted:', this.$refs.myCarousel);

   this.carouselInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
    }, 2000);
  },
};
</script>
