<template>
  <div class="mt-4">
    <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
      <div @click="minus" class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
      <div class="h-8 w-10 flex items-center justify-center">{{ counter }}</div>
      <div @click="plus" class="h-8 w-8 text-xl  flex items-center justify-center cursor-pointer select-none">+</div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({value:{default:0}})
const emit = defineEmits(['value'])
  const counter = ref(props.value||0)
  const plus = () =>{
  counter.value++
    emit('value',counter.value)
  }
  const minus = () =>{
    if (counter.value>0)counter.value--
    emit('value',counter.value)
  }
</script>

<style scoped>

</style>
