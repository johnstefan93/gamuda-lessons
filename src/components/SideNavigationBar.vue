<template>
  <v-navigation-drawer fixed app>
    <v-list dense nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        link
        :ripple="false"
        :class="{ active: isActive(item.to) }"
      >
        <template v-slot:prepend>
          <v-icon v-if="isActive(item.to) && item.title !== 'Home'"
            >mdi-checkbox-blank-circle</v-icon
          >
          <v-icon v-else>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title :class="{ active: isActive(item.to) }">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const items = [
  {
    title: "Home",
    icon: "mdi-home",
    to: "/",
  },
  {
    title: "Interpolation",
    icon: "mdi-checkbox-blank-circle-outline",
    to: "/interpolation",
  },
  {
    title: "Directives",
    icon: "mdi-checkbox-blank-circle-outline",
    to: "/directives",
  }
];

const isActive = computed(() => (path: string) => route.path === path);
</script>
