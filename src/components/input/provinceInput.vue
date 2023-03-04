<template>
  <div>
    <input type="text" class="input-box" @keyup="search" @focus="toggle=true" v-model="input">
    <ul v-if="toggle" class="absolute h-32 w-[20%] bg-white overflow-y-auto">
      <li @click="setval(item)" class="px-4 py-2 cursor-pointer hover:bg-slate-300" v-for="(item,i) in values" :key="i">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import province from '@/assets/utils/province.json'
import { ref, defineEmits } from 'vue';
const setval = (e) => {
  value.value=e
  input.value=e.name
emit('action',e)
  toggle.value=false
}
const search = () => {
  console.log(province)
  values.value=province.filter((item)=>item.name.includes(input.value))
  console.log(values)
  toggle.value=true
}
const input = ref()
const  toggle = ref(false)
const  value = ref()
const  values = ref(province)
const emit = defineEmits(['action'])

</script>

<style scoped>

</style>
