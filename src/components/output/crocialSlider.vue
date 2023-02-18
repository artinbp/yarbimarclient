<template>

</template>

<script setup>
import store from '@/store';
import { computed } from 'vue';
let images = computed(()=>store.getters.getBanners)
</script>

<style scoped>

</style>
