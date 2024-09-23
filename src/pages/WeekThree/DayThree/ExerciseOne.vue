<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title class="headline text-center" :style="{ backgroundColor: backgroundColor }" style="color: black">
      {{ greetingMessage }}
    </v-card-title>
    <v-card-text class="pt-5">
      Have a wonderful {{ timeOfDay }}!
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="updateGreeting">
        Update Greeting
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      greetingMessage: '',
      backgroundColor: '',
      timeOfDay: '',
    };
  },
  created() {
    // We use 'created' to initialize the greeting message and color 
    // when the component is first created and its data is available.
    this.updateGreeting();
  },
  beforeUpdate() {
    // 'beforeUpdate' is called just before the component re-renders 
    // due to a change in its data. We use it to ensure the greeting 
    // is always up-to-date with the current time, even if the update
    // is triggered by something else (like the button click).
    this.updateGreeting();
  },
  methods: {
    updateGreeting() {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        this.greetingMessage = 'Good morning!';
        this.backgroundColor = '#B3E5FC';
        this.timeOfDay = 'morning';
      } else if (currentHour >= 12 && currentHour < 18) {
        this.greetingMessage = 'Good afternoon!';
        this.backgroundColor = '#FFF176';
        this.timeOfDay = 'afternoon';
      } else {
        this.greetingMessage = 'Good evening!';
        this.backgroundColor = '#9575CD';
        this.timeOfDay = 'evening';
      }
    },
  },
};
</script>