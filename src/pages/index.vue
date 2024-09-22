<template>
  <div>
    <MyInput
      color="green"
      @input="handleInput"
      prependContent="mdi-checkbox-blank-circle"
      appendContent="mdi-checkbox-blank-circle-outline"
    />
    <p>{{ inputValue }}</p>
  </div>
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
