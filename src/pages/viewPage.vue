<template>
  <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
    <!-- product image -->
    <div>
      <div>
        <img id="main-img" :src="product?.thumbnail_url" class="w-full ">
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div>
          <img v-for="pro in (product?.media||[1,2])" :src="pro?.url" :key="pro" class="single-img w-full cursor-pointer border border-primary">
        </div>
      </div>
    </div>
    <!-- product image end -->

    <!-- product content -->
    <div class="rtl">
      <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">{{ product?.title }}</h2>
      <div class="flex items-center mb-4">
<!--        <div class="flex gap-1 text-sm text-yellow-400">-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--          <span><i class="fas fa-star"></i></span>-->
<!--        </div>-->
        <div class="text-xs text-gray-500 ml-3">(    {{ product.brand }})</div>
      </div>
      <div class="space-y-2">
        <p class="text-gray-800 font-semibold space-x-2">
          <span>موجودی: </span>
          <span class="text-green-600">{{ product.stock }}</span>
        </p>
        <p class="space-x-2">
          <span class="text-gray-800 font-semibold">برند: </span>
          <span class="text-gray-600"> {{ product.brand }}</span>
        </p>
        <p class="space-x-2">
          <span class="text-gray-800 font-semibold">دسته بندی: </span>
          <span class="text-gray-600"> {{ product.categories[i].title }}</span>
        </p>
<!--        <p class="space-x-2">-->
<!--          <span class="text-gray-800 font-semibold">SKU: </span>-->
<!--          <span class="text-gray-600">BE45VGRT</span>-->
<!--        </p>-->
      </div>
      <div class="mt-4 flex items-baseline gap-3">
        <span class="text-primary font-semibold text-xl">{{ currency( product.price ,'IRR') }}</span>
<!--        <span class="text-gray-500 text-base line-through">$500.00</span>-->
      </div>
      <p class="mt-4 text-gray-600">
        {{ product.description }}
      </p>
      <!-- size -->
      <div class="mt-4">
        <h3 class="text-base text-gray-800 mb-1">Size</h3>
        <div class="flex items-center gap-2">
          <!-- single size -->
          <div class="size-selector">
            <input type="radio" name="size" class="hidden" id="size-xs">
            <label for="size-xs"
                   class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              XS
            </label>
          </div>
          <!-- single size end -->
          <!-- single size -->
          <div class="size-selector">
            <input type="radio" name="size" class="hidden" id="size-s">
            <label for="size-s"
                   class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              S
            </label>
          </div>
          <!-- single size end -->
          <!-- single size -->
          <div class="size-selector">
            <input type="radio" name="size" class="hidden" id="size-m" checked="">
            <label for="size-m"
                   class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              M
            </label>
          </div>
          <!-- single size end -->
          <!-- single size -->
          <div class="size-selector">
            <input type="radio" name="size" class="hidden" id="size-l">
            <label for="size-l"
                   class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              L
            </label>
          </div>
          <!-- single size end -->
          <!-- single size -->
          <div class="size-selector">
            <input type="radio" name="size" class="hidden" id="size-xl">
            <label for="size-xl"
                   class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
              XL
            </label>
          </div>
          <!-- single size end -->
        </div>
      </div>
      <!-- size end -->
      <!-- color -->
      <div class="mt-4">
        <h3 class="text-base text-gray-800 mb-1">Color</h3>
        <div class="flex items-center gap-2">
          <!-- single color -->
          <div class="color-selector">
            <input type="radio" name="color" class="hidden" id="color-red" checked="">
            <label for="color-red" style="background-color : #fc3d57"
                   class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
            </label>
          </div>
          <!-- single color end -->
          <!-- single color -->
          <div class="color-selector">
            <input type="radio" name="color" class="hidden" id="color-white">
            <label for="color-white" style="background-color : #fff"
                   class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
            </label>
          </div>
          <!-- single color end -->
          <!-- single color -->
          <div class="color-selector">
            <input type="radio" name="color" class="hidden" id="color-black">
            <label for="color-black" style="background-color : #000"
                   class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
            </label>
          </div>
          <!-- single color end -->
        </div>
      </div>
      <!-- color end -->
      <!-- quantity -->
        <vue-counter></vue-counter>
      <!-- color end -->
      <!-- add to cart button -->
      <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
        <a href="#" class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
          <span class="mr-2"><i class="fas fa-shopping-bag"></i></span> Add to cart
        </a>
        <a href="#" class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase
                    hover:bg-transparent hover:text-primary transition text-sm">
          <span class="mr-2"><i class="far fa-heart"></i></span> Wishlist
        </a>
      </div>
      <!-- add to cart button end -->
      <!-- product share icons -->
      <div class="flex space-x-3 mt-4">
        <a href="#"
           class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#"
           class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#"
           class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <!-- product share icons end -->
    </div>
    <!-- product content end -->
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import {currency} from '@/assets/utils';
import store from '@/store';
import { useRoute } from 'vue-router';
import VueCounter from '@/components/input/vueCounter';
const route = useRoute()
const product = computed(() => store.getters.getProduct)
onMounted(async () =>{
  await store.dispatch('generateProduct', route.params.id)
})
</script>

<style scoped>

</style>
