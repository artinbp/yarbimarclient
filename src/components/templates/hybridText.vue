<template>
<div class="w-full rtl flex flex-col w-[80%] bg-white p-4 rounded-xl mx-auto">
  <h1 class="flex flex-row justify-between text-2xl">{{ props.title }} <vue-icon @click="toggle= !toggle" :path="arrow" :class="[toggle?'rotate-180 ':'']" class=" stroke-[#555] p-2 cursor-pointer w-8 h-8 transition-all  active:scale-90 " width="27" height="14" viewBox="0 0 27 14" /></h1>
  <div class="py-2 transition-all duration-1000" :class="[toggle?'block':'hidden']">
    <slot></slot>
  </div>
</div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { arrow } from '@/assets/icon/icon';
import VueIcon from '@/components/output/vueIcon';
const props = defineProps({title: { default:'' }})
const toggle = ref(false)
</script>

<style scoped>

</style>
