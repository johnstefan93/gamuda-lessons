<template>
  <div>
    <Input 
      v-model="inputDataProperty" 
      label="Some Label" 
      type="text"
    />
  </div>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  components: {
    Input,
  },
  data() {
    return {
      inputDataProperty: '', 
    };
  },
};
</script>