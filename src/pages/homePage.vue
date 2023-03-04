<template>
  <slider-banner/>
  <div class="container  py-16">
    <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">

      <!-- single feature -->
      <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
        <img :src="p1" class="lg:w-12 w-10 h-12 object-contain">
        <div>
          <h4 class="font-medium capitalize text-lg">ارسال رایگان</h4>
          <p class="text-gray-500 text-xs lg:text-sm">خرید بالای 300 هزار تومان</p>
        </div>
      </div>
      <!-- single feature end -->
      <!-- single feature -->
      <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
        <img :src="p2" class="lg:w-12 w-10 h-12 object-contain">
        <div>
          <h4 class="font-medium capitalize text-lg">صمانت بازگشت وجه</h4>
          <p class="text-gray-500 text-xs lg:text-sm">تا یک هفته</p>
        </div>
      </div>
      <!-- single feature end -->
      <!-- single feature -->
      <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
        <img :src="p3" class="lg:w-12 w-10 h-12 object-contain">
        <div>
          <h4 class="font-medium capitalize text-lg">24/7 پشتیبانی</h4>
          <p class="text-gray-500 text-xs lg:text-sm">پشتیبانی خرید</p>
        </div>
      </div>
      <!-- single feature end -->

    </div>
    <div class="lg:w-10/12 mx-auto my-5 flex md:flex-row flex-col gap-3 lg:gap-6 mx-auto justify-evenly">
      <img :src="heart" class="lg:w-[20vw]  w-[80vw] h-auto object-contain"/>

      <div class="rtl">
        <h4 class="font-sans text-[5rem] my-2">یار بیمار</h4>
        <p class="text-gray-500 text-lg">قلب شپنده ی شما در تکنولوژی برای خرید اسان و دسترسی به محصولات </p>
      </div>
    </div>
  </div>
  <div class="container pb-16">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
    <!-- product wrapper -->
    <div v-if="!products.length" class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">

      <div role="status"  v-for="i in 4" :key="i"
           class="max-w-sm  border border-gray-200 rounded shadow animate-pulse dark:border-blue-300">
        <div class="flex items-center justify-center h-[17rem] mb-4 bg-gray-300 rounded dark:bg-blue-300">
          <svg class="w-12 h-12 text-gray-200 dark:text-blue-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
               fill="currentColor" viewBox="0 0 640 512">
            <path
                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
          </svg>
        </div>
        <div class="mx-4 h-2.5 bg-gray-200 rounded-full dark:bg-blue-300 w-48 mb-4"></div>
        <div class="mx-4 h-2 bg-gray-200 rounded-full dark:bg-blue-300 mb-2.5"></div>
        <div class="mx-4 h-2 bg-gray-200 rounded-full dark:bg-blue-300"></div>
        <div class="mx-4 flex items-center flex-row mt-3 space-x-3">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-blue-300 w-12 mb-2"></div>
          <div class="w-18 h-2 bg-gray-200 rounded-full dark:bg-blue-300"></div>
        </div>
        <div class="bg-gray-200 w-full h-8 dark:bg-blue-300"></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div v-if="products"  class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">

      <!-- single product -->
      <product-item v-for="(pro,i) in products" :key="i" :id="pro?.id" :title="pro?.title" :image="pro?.thumbnail_url"
                    :price="pro.price" :items="pro"/>
      <!-- single product end -->
    </div>
    <!-- product wrapper end -->
  </div>
</template>

<script setup>
import p1 from '@/assets/images/icons/delivery-van.svg'
import p2 from '@/assets/images/icons/money-back.svg'
import p3 from '@/assets/images/icons/service-hours.svg'
import heart from '@/assets/images/heart 1.png'
import SliderBanner from '@/components/output/sliderBanner';
import ProductItem from '@/components/template/productItem';
import { computed, onMounted } from 'vue';
import store from '@/store';

const products = computed(() => store.getters.getProducts)
onMounted(async () => {
  await store.dispatch('generateProducts')
})
</script>
<style scoped>

</style>
