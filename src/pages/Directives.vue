<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-h3 font-weight-bold mb-4">Directives</h1>
          <v-divider class="mb-4"></v-divider>
          <p class="mb-4">
            Directives are special attributes that provide instructions to Vue.js on how to manipulate the DOM (Document
            Object Model). They are prefixed with "v-" and allow you to control elements' behavior, appearance, and data
            binding.
          </p>
          <p class="mb-4">Here are some of the most commonly used directives:</p>
          <v-card class="mb-4">
            <v-card-text>
              <h2 class="text-h5 font-weight-bold mb-2">v-if and v-else</h2>
              <p class="mb-4">
                The <code>v-if</code> directive conditionally renders an element based on a boolean expression. The
                <code>v-else</code> directive provides an alternative content to display when the
                <code>v-if</code> condition is false.
              </p>
              <pre class="mb-4">
                  <code>
                    &lt;div v-if="showGreeting"&gt;
                      Hello, world!
                    &lt;/div&gt;
                    &lt;div v-else&gt;
                      Goodbye!
                    &lt;/div&gt;
                  </code>
                </pre>
              <div v-if="showGreeting">Hello, world!</div>
              <div v-else>Goodbye!</div>
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-text>
              <h2 class="text-h5 font-weight-bold mb-2">v-for</h2>
              <p class="mb-4">
                The <code>v-for</code> directive iterates over an array or object, creating a new element for each item.
                It uses the syntax <code>v-for="(item, index) in items"</code>, where <code>item</code> represents the
                current item and <code>index</code> is its index in the array.
              </p>
              <pre class="mb-4">
                  <code>
                    &lt;ul&gt;
                      &lt;li v-for="(item, index) in items" :key="index"&gt;
                        &lbrace;&lbrace; item &rbrace;&rbrace;
                      &lt;/li&gt;
                    &lt;/ul&gt;
                  </code>
                </pre>
              <ul>
                <li v-for="(item, index) in items" :key="index">
                  {{ item }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-text>
              <h2 class="text-h5 font-weight-bold mb-2">v-bind</h2>
              <p class="mb-4">
                The <code>v-bind</code> directive dynamically binds an attribute's value to a data property. It uses the
                syntax <code>v-bind:attribute="dataProperty"</code> or the shorthand
                <code>:attribute="dataProperty"</code>.
              </p>
              <pre class="mb-4">
                  <code>
                    &lt;img :src="imageUrl" alt="Image"&gt;
                  </code>
                </pre>
              <img :src="imageUrl" alt="Image" />
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-text>
              <h2 class="text-h5 font-weight-bold mb-2">v-model</h2>
              <p class="mb-4">
                The <code>v-model</code> directive creates a two-way binding between a form element's value and a data
                property. It simplifies data input and updates.
              </p>
              <pre class="mb-4">
                  <code>
                    &lt;input type="text" v-model="message"&gt;
                  </code>
                </pre>
              <input type="text" v-model="message" />
              <p>Current message: {{ message }}</p>
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-text>
              <h2 class="text-h5 font-weight-bold mb-2">v-on</h2>
              <p class="mb-4">
                The <code>v-on</code> directive listens for events on an element and executes a method when the event
                occurs. It uses the syntax <code>v-on:event="method"</code> or the shorthand
                <code>@event="method"</code>.
              </p>
              <pre class="mb-4">
                  <code>
                    &lt;button @click="handleClick"&gt;Click Me&lt;/button&gt;
                  </code>
                </pre>
              <button @click="handleClick">Click Me</button>
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-text>
              <h2 class="text-h5 font-weight-bold mb-2">v-bind</h2>
              <p class="mb-4">
                The <code>v-bind</code> directive dynamically binds an attribute's value to a data property. It uses the
                syntax <code>v-bind:attribute="dataProperty"</code> or the shorthand
                <code>:attribute="dataProperty"</code>.
              </p>
              <pre class="mb-4">
                  <code>
                    &lt;div :style="{ backgroundColor: bgColor,color: fontColor }"&gt;
                      This div's background color is bound to the "color" variable.
                    &lt;/div&gt;
                  </code>
                </pre>
              <div :style="{ backgroundColor: bgColor, color: fontColor }">
                This div's background color is bound to the "color" variable.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('');
    const showGreeting = ref(true);
    const items = ref(['Item 1', 'Item 2', 'Item 3']);
    const imageUrl = ref(
      'https://media.cdn.gradconnection.com/uploads/ab45b3c5-7640-49a3-81eb-70eb5aa33332-gamuda_-_logo_.png'
    );
    const bgColor = ref('lightblue');
    const fontColor = ref('red');

    const handleClick = () => {
      console.log('Button clicked!');
    };

    return {
      message,
      showGreeting,
      items,
      imageUrl,
      handleClick,
      bgColor,
      fontColor,
    };
  },
};
</script>
