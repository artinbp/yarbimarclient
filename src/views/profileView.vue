<template>
  <div class="flex flex-row mx-4">
    <aside-menu></aside-menu>
    <div class="p-4">
      <router-view/>
    </div>
  </div>
</template>

<script setup>

import AsideMenu from '@/components/layout/asideMenu';
</script>

<style scoped>

</style>
