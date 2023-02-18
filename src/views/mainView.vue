<template>
<nav-bar/>
<div class="mt-32 min-h-[100vh]">
  <router-view/>
</div>
  <footer-view></footer-view>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar';
import FooterView from '@/components/layout/footerView';
</script>

<style scoped>

</style>
