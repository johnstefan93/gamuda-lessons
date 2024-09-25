<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn color="primary" @click="setRoleAndRedirect('admin', '/middleware/admin')">Set Admin Role</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="secondary" @click="setRoleAndRedirect('premium_user', '/middleware/premiumUser')">Set Premium User Role</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="tertiary" @click="setRoleAndRedirect('normal_user', '/middleware/regularUser')">Set Normal User Role</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    setRoleAndRedirect(role, path) {
      localStorage.setItem('roles', role);
        const baseUrl = window.location.origin;
        window.location.href = baseUrl + path; 
    }
  }
};
</script>