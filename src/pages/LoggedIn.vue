<template>
  <h1>You are logged in</h1>
  <v-btn @click="logout">Logout</v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      window.location.href = "/signup";
    }
  }
};
</script>