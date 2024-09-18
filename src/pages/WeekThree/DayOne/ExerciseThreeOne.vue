<template>
  <v-container>
    <div v-if="changeMessage" class="pa-4">First Message!</div>

    <div v-else class="py-4">Second Message!</div>

    <v-btn @click="toggleMessage">Toggle Message</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      changeMessage: true,
    };
  },
  methods: {
    toggleMessage() {
      this.changeMessage = !this.changeMessage;
    },
  },
};
</script>
