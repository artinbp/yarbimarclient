<template>
  <div class="flex flex-col mt-20">
    <h1 class="mb-10 text-2xl rtl mx-auto w-[75vw] font-semibold">{{ props.title }}</h1>
    <div class="p-2 px-8 w-[80vw] mx-auto">
      <swiper
          :breakpoints="{
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    }}"

          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, i) in props.data" :key="i">
          <router-link :to="'/product/'+item.id"
              class="max-w-sm bg-white block border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg	w-full h-[300px] object-cover" :src="item.thumbnail_url" alt=""/>
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight rtl text-gray-900 dark:text-white">{{ item.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 rtl dark:text-gray-400">{{ item.description }}</p>
              <h3 class="flex flex-row justify-between ">
                <p class="flex ltr flex-col">
                  <span class="text-green-500">{{ currency(item.price,'IRR') }}</span>
                  <span class="text-xs line-through text-[#aaa]">{{ currency(item.selling_price,'IRR') }}</span>
                </p>
                <router-link :to="'/product/'+item.id"
                   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  دیدن محصول
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg>
                </router-link>
              </h3>

            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';
import {currency} from '../../utils';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const props = defineProps({
  title: {
    type: String
  },
  data: {
    default: []
  }
})
</script>

<style scoped>

</style>
