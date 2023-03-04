<template>
  about page
<vue-accordion v-for="(item,i) in items" :key="i" :item="item" />

<vue-icon :path="plus" width="40" height="40" viewBox="0 0 20 20" class="stroke-blue-600" />
</template>

<script setup>
import { plus } from '@/assets/icon';
import VueAccordion from '@/components/output/vueAccordion';
import VueIcon from '@/components/output/vueIcon';

const items = [
  {
    id: 1,
    title: "header 1",
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: "header 2",
    content: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    title: "header 3",
    content: 'Lorem ipsum dolor sit amet',
  },
];
</script>

<style scoped>

</style>
