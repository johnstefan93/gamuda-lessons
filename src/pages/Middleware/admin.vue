<template>
  <v-card title="Admin" variant="tonal">
    <v-card-actions>
      <v-btn @click="logout">Log Out</v-btn>
    </v-card-actions> 
  </v-card>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("roles");
      window.location.href = "/weekfour/dayfour/exercisetwo";
    }
  }
};
</script>