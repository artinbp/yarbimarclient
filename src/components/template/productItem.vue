<template>
  <div class="group rounded bg-white shadow overflow-hidden">
    <!-- product image -->
    <div class="relative">
      <img :src="props.image" class="w-full">
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
        <router-link :to="`/show/${props.id}`" class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
          <i class="fas fa-search"></i>
        </router-link>
        <a  @click="addFav" class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
          <i :class="[wl.some(element => {
  if (element.id === props.id) {
    return true
  }
  return false
})?'fas':'far']" class=" fa-heart"></i>
        </a>
      </div>
    </div>
    <!-- product image end -->
    <!-- product content -->
    <div class="pt-4 pb-3 px-4">
      <router-link :to="`/show/${props.id}`">
        <h4 class="uppercase font-medium text-xl rtl mb-2 text-gray-800 hover:text-primary transition">
          {{props.title }}
        </h4>
      </router-link>
      <div class="flex justify-between items-center  mb-1 space-x-2">
        <p class="text-xl text-primary font-roboto font-semibold">{{ currency(props.price,'IRR' )}}</p>
        <span>{{ props.items.brand }}</span>
      </div>
      <div class="flex items-center">

<!--        <div class="flex gap-1 text-sm text-yellow-400">-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--        </div>-->
<!--        <div class="text-xs text-gray-500 ml-3">(150)</div>-->
      </div>
    </div>
    <!-- product content end -->
    <!-- product button -->
    <a :class="[cart?.items.some(element => {
  if (element.product_id === props.id) {
    return true
  }
  return false
})?'hidden':'']" @click.prevent="addCart" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
      افزودن به سبد
    </a>
    <a :class="[cart?.items.some(element => {
  if (element.product_id === props.id) {
    return true
  }
  return false
})?'':'hidden']" @click.prevent="removeCart(props.id)" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
      خروج از سبد
    </a>
    <!-- product button end -->
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { currency } from '@/assets/utils';
import store from '@/store';
const wl = computed(()=>store.getters.getWishList)
const cart = computed(()=>store.getters.getCart)
const props = defineProps({
  id:{type:Number},
  image:{type:String},
  title:{type:String},
  price:{type:String},
  items:{type:Object},
})
const addFav = () =>{
store.dispatch('generateWishList',props.items)
}
const addCart = async () =>{
  await store.dispatch('appendCart', { product_id:props.id }).then(async ()=>await store.dispatch('generateCart'))
}
const removeCart = async () =>{
  await store.dispatch('removeCart', { product_id:props.id }).then(async ()=>await store.dispatch('generateCart'))
}
</script>

<style scoped>

</style>
