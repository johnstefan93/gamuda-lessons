<template>
    <div>
      <button @click="decrement">-</button>
      <span>{{ value }}</span>
      <button @click="increment">+</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ['value'],
    emits: ['update:value'],
    methods: {
      increment() {
        this.$emit('update:value', this.value + 1);
      },
      decrement() {
        this.$emit('update:value', this.value - 1);
      },
    },
  };
  </script>
  