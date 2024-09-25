import { defineStore } from 'pinia';

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
    getters: {
    getPosts: (state) => state.posts
  },
  actions: {
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        this.posts = await response.json();
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
});