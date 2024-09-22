<template>
  <div>
    <MyInput
      color="green"
      @input="handleInput"
      prependContent="mdi-checkbox-blank-circle"
      appendContent="mdi-checkbox-blank-circle-outline"
    />

    <div class="input-message">
      <p class="input-text" v-if="showCustomMessage">
        Your input is: {{ inputValue }}
      </p>
    </div>

    <MyButton
      color="white"
      backgroundColor="blue"
      border="1px solid red"
      label="Click me"
      @click="showMessage"
    />
  </div>
</template>

<script>
import MyInput from '../components/MyInput.vue';
import MyButton from '../components/MyButton.vue';

export default {
  data() {
    return {
      inputValue: '',
      showCustomMessage: false,
    };
  },
  methods: {
    handleInput(event) {
      if (event.target) {
        this.inputValue = event.target.value;
      }
    },
    showMessage(event) {
      if (event.target) {
        this.showCustomMessage = !this.showCustomMessage;
      }
    },
  },
};
</script>

<style>
.input-message {
  padding: 10px;
  margin: 5px;
  height: 50px;
}

.input-text {
  padding: 0px;
  margin: 0px;
}
</style>
