<template>
  <button
    :style="{
      color: color,
      backgroundColor: backgroundColor,
      padding: padding,
      border: border,
      borderRadius: borderRadius,
    }"
    @click="handleClick"
  >
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
  methods: {
    handleClick(event) {
      this.$emit('click', event.target.value);
    },
  },
};
</script>
