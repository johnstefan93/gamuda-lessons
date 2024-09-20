<template>
  <v-text-field v-model="name" label="Name"></v-text-field>
  <v-text-field v-model.number="age" label="Age" type="number"></v-text-field>
  <div>{{ greetingMessage }}</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
      greetingMessage: 'Hello, its me.',
    };
  },
   watch: {
    name(newName) {
      console.log(newName)
      if (newName && this.age !== null) {
        this.greetingMessage = `Hello, ${newName}!`;
      } else if (newName) {
        this.greetingMessage = `Hello, ${newName}!`;
      } else {
        this.greetingMessage = 'Hello there';
      }
    },
    age(newAge) {
      console.log(newAge)
      if (this.name && newAge !== null) {
        this.greetingMessage = `Hello, ${this.name}! You are ${newAge} years old.`;
      } else if (this.name) {
        this.greetingMessage = `Hello, ${this.name}!`;
      } else {
        this.greetingMessage = 'Hello there!';
      }
    }
  },
};
</script>