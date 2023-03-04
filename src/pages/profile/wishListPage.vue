<script setup>
import { computed } from 'vue';
import { deleteIcon } from '@/assets/icon';
import store from '@/store';
import SideBar from '@/components/template/sideBar';
import VueIcon from '@/components/output/vueIcon';
import {currency} from '@/assets/utils';


const deleteWishList = async (e) => {
  await store.commit('removeWishList', e)
}

const wishList = computed(() => store.getters.getWishList)

</script>
<template>
  <!-- breadcrum -->
  <div class="flex flex-row-reverse items-center justify-between">
    <div class="py-4 container rtl flex gap-3 items-center">
      <router-link to="/" class="text-primary text-base">
        <i class="fas fa-home"></i>
      </router-link>
      <span class="text-sm text-gray-400"><i class="fas fa-chevron-right rotate-180"></i></span>
      <p class="text-gray-600 font-semibold uppercase">حساب من</p>
    </div>

  </div>
  <!-- breadcrum end -->

  <!-- account wrapper -->
  <div class="container rtl lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <!-- sidebar -->
    <side-bar></side-bar>
    <!-- sidebar end -->
    <!--    add address -->

    <!--    add address end -->
    <!-- account content -->

    <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
      <!-- single wishlist -->
      <div v-for="(wl,i) in wishList" :key="i" class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
        <!-- cart image -->
        <div class="w-28 flex-shrink-0">
          <img :src="wl?.thumbnail_url" class="w-full">
        </div>
        <!-- cart image end -->
        <!-- cart content -->
        <div class="md:w-1/3 w-full">
          <h2 class="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
            {{ wl?.title }}
          </h2>
          <p class="text-gray-500 text-sm">موجودی: <span class="text-green-600" v-if="wl?.stock>1">{{ wl?.stock }} در انبار</span><span v-if="wl?.stock<1" class="text-red-600">موجود نمی باشد</span></p>
        </div>
        <!-- cart content end -->
        <div class="">
          <p class="text-primary text-lg font-semibold">{{ currency(wl?.price, 'IRR') }}</p>
        </div>
        <a href="#" class="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
          Add to cart
        </a>
        <div @click="deleteWishList(wl.id)" class="text-gray-600 hover:text-primary cursor-pointer">
          <vue-icon  :path="deleteIcon" view-box="0 0 20 20" class="w-10 h-10 stroke-slate-600 " />
        </div>
      </div>
      <!-- single wishlist end -->
    </div>
    <!-- account content end -->
  </div>
  <!-- account wrapper end -->

</template>

<style scoped>

</style>
