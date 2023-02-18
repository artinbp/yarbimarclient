<template>
  <div class="flex font-sans w-[50vw] mx-auto shadow-xl shadow-[#aaa] rounded-xl">
    <div class="flex-none w-[20vw] h-[60vh] relative">
      <img :src="picMain.url" alt="" class="absolute rounded-l-xl inset-0 w-full h-full object-cover" loading="lazy" />
      <div class="absolute inset-0 left-10 top-[50vh] flex flex-row gap-2 ">
        <img v-for="(pic, i) in product.media" :key="i" :src="pic.url" alt="" @click="changePic(pic.id)" class="h-14 active:scale-90 shadow-md cursor-pointer  shadow-white rounded-lg object-cover w-14" srcset="">
      </div>
    </div>
    <form class="flex flex-col justify-between p-6">
      <div class="flex flex-col flex-auto gap-6">
        <div class="flex flex-col">
          <h1 class="flex-auto text-[2.5rem]  font-semibold rtl px-2 text-slate-900">
            {{ product.title }}
          </h1>
          <div class="w-full flex-none text-sm rtl font-medium text-slate-700 mt-2">
            {{ product.stock }} عدد در انبار
          </div>
          <div class="text-2xl rtl font-semibold py-2 text-blue-500">
            {{ currency(product.price, 'IRR') }}
          </div>
        </div>
        <p class="text-md font-semibold text-slate-700  rtl">توضیحات</p>
        <p class="text-sm text-slate-700 rtl">
          {{ product.description }}
        </p>
      </div>
      <div class="flex space-x-4 mb-6 mt-8 mx-10 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white" type="submit">
            خرید فوری
          </button>
          <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
            افزودن به سبد
          </button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" title="علاقه مندی ها" type="button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue';
import store from '@/store';
import { currency } from '../utils';
const route = useRoute()
const product = computed(()=> store.getters.getProduct)
const picMain = computed(()=>(product.value?.media)?product.value?.media[0]:[])

onMounted(()=> store.dispatch('generateProduct',  route.params.id).then(()=> picMain.value=product.value?.media[0]))
const changePic = (e) => {
  picMain.value=product.value.media.filter((item)=>item.id===e)[0]
}
</script>

<style scoped>

</style>
