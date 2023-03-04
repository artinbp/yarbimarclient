<template>
  <div>
    <input type="text" class="input-box" @keyup="search" @focus="start" v-model="input">
    <ul v-if="toggle" class="absolute h-32 w-[20%] bg-white overflow-y-auto">
      <li v-for="(item,i) in valueses" :key="i" class="px-4 py-2 cursor-pointer hover:bg-slate-300" @click="setval(item)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import city from '@/assets/utils/city.json'
import { ref, defineEmits, defineProps } from 'vue';
const current= ref(city.filter((item)=>item.province_id === props.province_id))
const start = () =>{
  toggle.value=true
  current.value=city.filter((item)=>item.province_id === props.province_id)
}
const setval = (e) => {
  value.value=e
  input.value=e.name
  emit('action',e)
  toggle.value=false
}
const search = () => {
  console.log(current)
  current.value=city.filter((item)=>item.province_id === props.province_id)
  valueses.value=current.value.filter((item)=>item.name.includes(input.value))
  console.log(valueses)
  toggle.value=true
}
const input = ref()
const  toggle = ref(false)
const  value = ref()
const  valueses = ref(current)
const emit = defineEmits(['action'])
const props=defineProps({province_id:{type:Number}})

</script>

<style scoped>

</style>
