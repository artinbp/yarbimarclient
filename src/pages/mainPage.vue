<template>
  <nav-bar></nav-bar>

  <router-view/>
<foo-ter></foo-ter>
  <copy-right></copy-right>
</template>

<script setup>
import NavBar from '@/components/layout/navBar';
import FooTer from '@/components/template/fooTer';
import CopyRight from '@/components/template/copyRight';
</script>

<style scoped>

</style>
