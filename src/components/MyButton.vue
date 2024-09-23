<template>
  <button :style="buttonStyles" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    backgroundColor: {
      type: String,
      default: 'lightgray',
    },
    color: {
      type: String,
      default: 'black',
    },
    padding: {
      type: String,
      default: '10px 20px',
    },
    border: {
      type: String,
      default: 'none',
    },
    borderRadius: {
      type: String,
      default: '5px',
    },
  },
  computed: {
    buttonStyles() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor,
        padding: this.padding,
        border: this.border,
        borderRadius: this.borderRadius,
      };
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event.target.value);
    },
  },
};
</script>
