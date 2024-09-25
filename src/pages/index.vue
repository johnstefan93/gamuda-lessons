<template>
    <RouterLink to="/home"><v-btn>Home</v-btn></RouterLink>
    <RouterLink to="/about/me"><v-btn>About</v-btn></RouterLink>
    <RouterLink to="/CoNtAcT"><v-btn>Contact</v-btn></RouterLink>
</template>

<script>
import MyInput from '../components/MyInput.vue';

export default {
  components: {
    MyInput,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleInput(event) {
      if (event.target) {
        this.inputValue = event.target.value;
      }
    },
  },
};
</script>
