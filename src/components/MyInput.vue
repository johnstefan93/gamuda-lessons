<template>
  <div class="input-wrapper">
    <v-icon v-if="prependContent">{{ prependContent }}</v-icon>
    <input
      type="text"
      v-model="inputValue"
      :style="{ color: color }"
      @input="emitInput"
    />
    <v-icon v-if="appendContent">{{ appendContent }}</v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    color: {
      type: String,
      default: 'white',
    },
    prependContent: {
      type: String,
      default: '', 
    },
    appendContent: {
      type: String,
      default: '',
    },
  },
  methods: {
    emitInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
