<template>
  <v-container>
    <p>Counter: {{ count }}</p>
    <v-btn @click="increment" class="mr-2 mt-2">Increment</v-btn>
    <v-btn  @click="decrement" class="mt-2">Decrement</v-btn>
  </v-container>
</template>

<script setup>
import useCounter from '@/composables/useCounterValueChange';

const count = ref(5);

const { increment, decrement } = useCounter(count);

</script>