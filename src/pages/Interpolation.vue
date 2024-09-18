<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-h3 font-weight-bold mb-4">Interpolation</h1>
          <v-divider class="mb-4"></v-divider>
          <p class="mb-4">
            Interpolation is a powerful feature in Vue.js that allows you to dynamically insert data into your HTML templates. It uses double curly braces {{ }} to embed expressions that are evaluated and displayed in the rendered HTML.
          </p>
          <v-card class="mb-4">
            <v-card-text>
                <code>
                    &lbrace;&lbrace; message &rbrace;&rbrace; = 
                    {{message}}
                </code>
            </v-card-text>
          </v-card>
          <p class="mb-4">
            Interpolation can be used with any valid JavaScript expression, including:
          </p>
          <ul class="mb-4">
            <li>Variables</li>
            <li>Properties of objects</li>
            <li>Method calls</li>
            <li>Arithmetic operations</li>
            <li>Conditional statements</li>
          </ul>
          <p class="mb-4">
            Here are some examples of how to use interpolation:
          </p>
          <v-card class="mb-4">
            <v-card-text>
                <code>
                  The current time is: {{ new Date().toLocaleTimeString() }} <br>
                  The sum of 2 and 3 is: {{ 2 + 3 }}<br>
                  Is the user logged in? {{ isLoggedIn ? 'Yes' : 'No' }}
                </code>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('Hello, world!');
const isLoggedIn = ref(false);
</script>