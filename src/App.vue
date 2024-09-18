<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <v-container>
        <SideNavigationBar />
        <router-view />
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script lang="ts" setup></script>
