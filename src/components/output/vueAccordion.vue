<template>
  <div @click="toggle=!toggle" style=" transition: .3s; will-change: max-height;
  contain: layout;" :class="[toggle?'max-h-[200px]':'h-[10vh]']" class="w-[44vw] relative  transition-all duration-1000 select-none cursor-pointer mx-auto flex p-2 px-4 rounded-xl mb-2 flex-col">
    <div class="flex flex-row bg-gray-100 justify-between p-0 px-2 items-center rounded-xl">
      <vue-icon :path="arrow" view-box="0 0 20 20" width="30" height="30" class="stroke-gray-600 transition-all duration-1000" :class="[toggle?'rotate-180':'rotate-0']" />
      <span class="text-[34px]">{{ props.item.title }}</span>
    </div>
    <div class="text-[22px] transition-all text-slate-800" :class="toggle?'opacity-1  duration-1000 ':'opacity-0  duration-200 translate-y-[100%]'">
      {{  props.item.content  }}
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue';
  import {arrow} from '@/assets/icon';
  import VueIcon from '@/components/output/vueIcon';
  const toggle = ref(false)
  const props = defineProps({
    item:{
      type:Object
    }
  })
</script>

<style scoped>

</style>
