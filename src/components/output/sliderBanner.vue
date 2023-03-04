<template>
  <Flicking :options="{ circular: true, horizontal: true }" :plugins="plugins">
    <div v-if="!(banners.length)" class="flex w-[100vw] h-[60vh] rtl flex-row">
      <div style="transition: 1s" class="flex w-[100vw]  animate-pulse h-[70vh] flex-row transition-all">
        <div class="flex items-center justify-center w-full h-[60vh] bg-gray-300 rounded  dark:bg-blue-400">
          <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"
               viewBox="0 0 640 512">
            <path
                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
          </svg>
        </div>
        <div
            class="flex absolute flex-col bg-[#eee2] text-white bottom-[10vh] -right-[0vh] w-[40vw] rounded-l-3xl p-4 px-3">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div class="flex flex-row gap-2">
            <a class="bg-primary p-3 text-white w-1/4 rounded-md"></a>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(banner, i) in banners" :key="i" class="flex rtl flex-row pt-10 px-28">
      <div v-if="banner?.title" style="transition: 1s" class="flex w-[100vw] h-[70vh] flex-row transition-all">
        <img :alt="banner?.title" class="object-cover object-center w-[100%] h-[70vh] rounded-2xl"
             style="transition: 1s" :src="banner?.media.url"/>
        <div :class="i>0?'right-['+(i*100)+'vh]':''"
             class="flex absolute flex-col min-w-[30rem] bg-[#3332] text-white bottom-[10vh]  w-fit rounded-l-3xl p-4 px-3">
          <p class="mt-5 text-2xl font-semibold rtl">{{ banner?.title }}</p>
          <span class="flex flex-row justify-between rtl"> {{ banner?.description }}</span>
          <div class="flex flex-row gap-2">
            <a class="bg-primary p-3 text-white rounded-md" :href="`${banner?.url}`">مشاهده محصول</a>
          </div>
        </div>
      </div>
    </div>

  </Flicking>
</template>

<script setup>
import store from '@/store';
import { computed, onMounted } from 'vue';
import Flicking from '@egjs/vue3-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';

const plugins =  [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })]
let banners = computed(() => store.getters.getBanners)
onMounted(async () => {
  await store.dispatch('generateBanners')
})
</script>

<style scoped>

</style>
