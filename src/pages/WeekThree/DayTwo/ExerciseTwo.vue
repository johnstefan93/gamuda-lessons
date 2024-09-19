<template>
  <v-container width="1000">
    <v-row>
      <v-col 
        v-for="item in items" 
        :key="item.id" 
        cols="12" 
        sm="6" 
        md="4"
      >
        <v-card :class="{ 'popular-item': item.isPopular }">
          <v-card-title :style="{ backgroundColor: priceColor(item.price) }">{{ item.name }}</v-card-title>
          <v-card-text>
            <div>Price: ${{ item.price }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Product A', price: 25.99, isPopular: true },
        { id: 2, name: 'Product B', price: 12.50, isPopular: false },
        { id: 3, name: 'Product C', price: 39.95, isPopular: true },
      ]
    }
  },
  methods: {
    priceColor(price) {
      const maxPrice = 50; 
      const hue = (1 - (price / maxPrice)) * 120; // Green to red
      return `hsl(${hue}, 60%, 50%)`;
    }
  }
}
</script>

<style>
.popular-item {
  border: 5px solid gold !important;
}
</style>