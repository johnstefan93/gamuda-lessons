<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1 class="text-h3 font-weight-bold mb-4">v-model in Vue.js</h1>
            <v-divider class="mb-4"></v-divider>
            <p class="mb-4">
              The `v-model` directive in Vue.js provides a convenient way to create two-way data binding between form input elements and component data. It simplifies the process of handling user input and updating the component's state.
            </p>
            <p class="mb-4">
              Here's how you can use `v-model`:
            </p>
            <v-card class="mb-4">
              <v-card-text>
                <h2 class="text-h5 font-weight-bold mb-2">Basic Example</h2>
                <p class="mb-4">
                  In this example, the `message` data property is bound to the input field using `v-model`. Any changes made in the input field will automatically update the `message` value, and vice versa.
                </p>
                <pre class="mb-4">
                  <code>
                    &lt;template&gt;
                      &lt;div&gt;
                        &lt;p&gt;Enter a message:&lt;/p&gt;
                        &lt;input type="text" v-model="message"&gt;
                        &lt;p&gt;Message: &lt;span&gt;&lbrace;&lbrace; message &rbrace;&rbrace;&lt;/span&gt;&lt;/p&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
  
                    &lt;script&gt;
                      export default {
                        data() {
                          return {
                            message: 'Hello, world!',
                          };
                        },
                      };
                    &lt;/script&gt;
                  </code>
                </pre>
              </v-card-text>
            </v-card>
            <div>
              <p>Enter a message:</p>
              <input type="text" v-model="message">
              <p>Message: <span>{{ message }}</span></p>
            </div>
            <h2 class="text-h5 font-weight-bold mb-2">Custom Component with v-model</h2>
            <p class="mb-4">
              You can also use `v-model` with custom components. In this example, we create a `Counter` component that uses `v-model` to bind its value to the parent component's `count` property.
            </p>
            <v-card class="mb-4">
              <v-card-text>
                <h3 class="text-h6 font-weight-bold mb-2">Counter Component</h3>
                <pre class="mb-4">
                  <code>
                    &lt;template&gt;
                      &lt;div&gt;
                        &lt;button @click="decrement"&gt;-&lt;/button&gt;
                        &lt;span&gt;&lbrace;&lbrace; value &rbrace;&rbrace;&lt;/span&gt;
                        &lt;button @click="increment"&gt;+&lt;/button&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
  
                    &lt;script&gt;
                      export default {
                        props: ['value'],
                        emits: ['update:value'],
                        data() {
                          return {
                            // ...
                          };
                        },
                        methods: {
                          increment() {
                            this.$emit('update:value', this.value + 1);
                          },
                          decrement() {
                            this.$emit('update:value', this.value - 1);
                          },
                        },
                      };
                    &lt;/script&gt;
                  </code>
                </pre>
                <h3 class="text-h6 font-weight-bold mb-2">Parent Component</h3>
                <pre class="mb-4">
                  <code>
                    &lt;template&gt;
                      &lt;div&gt;
                        &lt;Counter v-model="count"&gt;&lt;/Counter&gt;
                        &lt;p&gt;Count: &lt;span&gt;&lbrace;&lbrace; count &rbrace;&rbrace;&lt;/span&gt;&lt;/p&gt;
                      &lt;/div&gt;
                    &lt;/template&gt;
  
                    &lt;script&gt;
                      export default {
                        data() {
                          return {
                            count: 0,
                          };
                        },
                      };
                    &lt;/script&gt;
                  </code>
                </pre>
              </v-card-text>
            </v-card>
            <div>
              <Counter v-model="count"></Counter>
              <p>Count: <span>{{ count }}</span></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Counter from '@/components/Counter.vue';
  
  const message = ref('Hello, world!');
  const count = ref(0);
  </script>
  
  <style scoped>
  .active {
    color: #2196f3;
  }
  
  .error {
    color: #ed2e24;
  }
  </style>
  