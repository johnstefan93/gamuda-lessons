<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-h3 font-weight-bold mb-4">Class Styles Binding</h1>
          <v-divider class="mb-4"></v-divider>
          <p class="mb-4">
            Class styles binding in Vue.js allows you to dynamically apply CSS classes to elements based on data or
            conditions. This provides a powerful way to control the appearance and behavior of your components.
          </p>
          <p class="mb-4">Here's how you can use class styles binding:</p>
          <v-card class="mb-4">
            <v-card-text>
              <code>
                &lt;template&gt;<br />
                &nbsp;&lt;div :class="{ active: isActive, error: hasError }"&gt;<br />
                &nbsp; &nbsp;This div will have the "active" class if isActive is true, and the "error" class if
                hasError is true.<br />
                &nbsp;&lt;/div&gt;<br />
                &lt;/template&gt;<br />
                <br />
                &lt;script&gt;<br />
                &nbsp;export default {<br />
                &nbsp; &nbsp;data() {<br />
                &nbsp; &nbsp; &nbsp;return {<br />
                &nbsp; &nbsp; &nbsp; &nbsp;isActive: false,<br />
                &nbsp; &nbsp; &nbsp; &nbsp;hasError: false,<br />
                &nbsp; &nbsp; &nbsp;};<br />
                &nbsp; &nbsp;},<br />
                &nbsp;};<br />
                &lt;/script&gt;
              </code>
            </v-card-text>
          </v-card>
          <div :class="{ active: isActive, error: hasError }" style="margin-block: 20px">
            This div will have the "active" class if isActive is true, and the "error" class if hasError is true.
          </div>
          <v-btn @click="toggleActive">Toggle Active</v-btn>
          <v-btn @click="toggleError">Toggle Error</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);
const hasError = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};

const toggleError = () => {
  hasError.value = !hasError.value;
};
</script>

<style scoped>
.active {
  color: #2196f3;
}

.error {
  color: #ed2e24;
}
</style>
