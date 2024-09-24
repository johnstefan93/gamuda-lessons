<template>
  <ul>
    <li v-highlight-on-click>Item 1</li>
    <li v-highlight-on-click>Item 2</li>
    <li v-highlight-on-click>Item 3</li>
  </ul>

  <button v-highlight-on-click>Highlight me too!</button>
</template>

<style>
.highlighted {
  background-color: yellow;
}
</style>