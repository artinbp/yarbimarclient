<template>
  <div class="home justify-end ">
    <crocial-slider />

<product-slider :data="product" title="محصولات پر فروش"/>

  </div>
<!--  product-->

</template>

<script setup>
// @ is an alias to /src

import CrocialSlider from '@/components/output/crocialSlider';
import ProductSlider from '@/components/output/productSlider';
import { computed, onMounted } from 'vue';
import store from '@/store';

onMounted(()=>{
  store.dispatch('generateProducts')
})
const product = computed(()=>store.getters.getProducts)
</script>
<style scoped>

</style>
