<template>
  <v-container width="1000">
    <v-checkbox v-model="showOutOfStock" label="Show Out of Stock"></v-checkbox>

    <v-row>
      <v-col 
        v-for="item in availableItems" 
        :key="item.id" 
        cols="12" 
        sm="6" 
        md="4"
      >
        <v-card>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>
            <div>Price: ${{ item.price }}</div>
            <div v-if="item.inStock">In Stock</div>
            <div v-else>Out of Stock</div>
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
        { id: 1, name: 'Product A', price: 25.99, inStock: true },
        { id: 2, name: 'Product B', price: 12.50, inStock: false },
        { id: 3, name: 'Product C', price: 39.95, inStock: true },
      ],
      showOutOfStock: false
    }
  },
  computed: {
    availableItems() {
      if (this.showOutOfStock) {
        return this.items;
      } else {
        return this.items.filter(item => item.inStock);
      }
    }
  }
}
</script>