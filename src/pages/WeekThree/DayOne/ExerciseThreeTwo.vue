<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <v-btn v-on:click="handleClick(item)" color="primary"> {{ item }}</v-btn>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ['apple', 'banana', 'orange'],
    };
  },
  methods: {
    handleClick(item) {
      console.log('Clicked on:', item);
    },
  },
};
</script>
