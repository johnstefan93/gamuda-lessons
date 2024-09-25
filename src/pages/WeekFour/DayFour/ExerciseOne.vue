<template>
  <v-container>
    <v-row>
      <v-col
        v-for="post in postStore.posts"
        :key="post.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/posts';

const postStore = usePostStore();
const getUsers = computed(() => userStore.getPosts); 

onMounted(postStore.fetchPosts); 
</script>