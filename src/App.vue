<template>
  <router-view/>
</template>

<script setup>
import { onMounted } from 'vue';
import store from '@/store';

onMounted(async () => {
  await store.commit('setToken',sessionStorage.getItem('token')??'')
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
