<template>
  <v-container>
    <v-progress-linear
      :model-value="progressValue"
      color="primary"
    ></v-progress-linear>
    <v-btn @click="incrementCounter" class="mt-5">Increment Counter</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      progressValue: 0,
      counter: 0,
    };
  },
  beforeUpdate() {
    console.log(
      'beforeUpdate hook executed. progressValue:',
      this.progressValue,
      'counter:',
      this.counter
    );
  },
  updated() {
    console.log(
      'updated hook executed. progressValue:',
      this.progressValue,
      'counter:',
      this.counter
    );
  },
  mounted() {
    setInterval(() => {
      this.counter++;
      this.progressValue = (this.counter % 100) + 1;
    }, 1000);
  },
  methods: {
    incrementCounter() {
      console.log(this.counter);
      this.counter++;
    },
  },
};
</script>
