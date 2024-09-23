<template>
  <v-container>
    <v-btn @click="showDialog = true">Open Dialog</v-btn>

    <v-dialog v-model="showDialog" max-width="400" v-show="showDialog">
      <v-card>
        <v-card-title>Dialog Title</v-card-title>
        <v-card-text> This is the dialog content. </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="showDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      console.log('Interval running...');
    }, 2000);
  },
  beforeUnmount() {
    console.log('beforeUnmount hook executed');
    clearInterval(this.intervalId);
  },
  unmounted() {
    console.log('unmounted hook executed');
  },
};
</script>
