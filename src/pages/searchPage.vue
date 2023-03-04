<template>
  <div class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
    <!-- sidebar -->
    <div
        class="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
      <div class="divide-gray-200 divide-y space-y-5 relative">
        <!-- category filter -->
        <div class="relative">
          <div class="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">دسته بندی ها</h3>
          <div class="space-y-2">
            <!-- single category -->
            <div v-for="cat in categories" :key="cat" class="flex items-center">
              <input type="checkbox" id="Bedroom" class="text-primary focus:ring-0 rounded-sm cursor-pointer">
              <label for="Bedroom" class="text-gray-600 ml-3 cursor-pointer">{{ cat.title }}</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- single category end -->
          </div>
        </div>
        <!-- category filter end -->
        <!-- brand filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">برند ها</h3>
          <div class="space-y-2">
            <!-- single brand name -->
            <div v-for="brand in brands" :key="brand"  class="flex items-center">
              <input type="checkbox" id="Dominik" class="text-primary focus:ring-0 rounded-sm cursor-pointer">
              <label for="Dominik" class="text-gray-600 ml-3 cursor-pointer">{{ brand }}</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- single brand name end -->
          </div>
        </div>
        <!-- brand filter end -->
        <!-- price filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">قیمت</h3>
          <div class="mt-4 flex items-center">
            <input type="text"
                   class="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                   placeholder="min">
            <span class="mx-3 text-gray-500">-</span>
            <input type="text"
                   class="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                   placeholder="mix">
          </div>
        </div>
        <!-- price filter end -->
<!--        &lt;!&ndash; size filter &ndash;&gt;-->
<!--        <div class="pt-4">-->
<!--          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>-->
<!--          <div class="flex items-center gap-2">-->
<!--            &lt;!&ndash; single size &ndash;&gt;-->
<!--            <div class="size-selector">-->
<!--              <input type="radio" name="size" class="hidden" id="size-xs">-->
<!--              <label for="size-xs"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">-->
<!--                XS-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single size end &ndash;&gt;-->
<!--            &lt;!&ndash; single size &ndash;&gt;-->
<!--            <div class="size-selector">-->
<!--              <input type="radio" name="size" class="hidden" id="size-s">-->
<!--              <label for="size-s"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">-->
<!--                S-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single size end &ndash;&gt;-->
<!--            &lt;!&ndash; single size &ndash;&gt;-->
<!--            <div class="size-selector">-->
<!--              <input type="radio" name="size" class="hidden" id="size-m" checked="">-->
<!--              <label for="size-m"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">-->
<!--                M-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single size end &ndash;&gt;-->
<!--            &lt;!&ndash; single size &ndash;&gt;-->
<!--            <div class="size-selector">-->
<!--              <input type="radio" name="size" class="hidden" id="size-l">-->
<!--              <label for="size-l"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">-->
<!--                L-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single size end &ndash;&gt;-->
<!--            &lt;!&ndash; single size &ndash;&gt;-->
<!--            <div class="size-selector">-->
<!--              <input type="radio" name="size" class="hidden" id="size-xl">-->
<!--              <label for="size-xl"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">-->
<!--                XL-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single size end &ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; size filter end &ndash;&gt;-->
<!--        &lt;!&ndash; color filter &ndash;&gt;-->
<!--        <div class="pt-4">-->
<!--          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">color</h3>-->
<!--          <div class="flex items-center gap-2">-->
<!--            &lt;!&ndash; single color &ndash;&gt;-->
<!--            <div class="color-selector">-->
<!--              <input type="radio" name="color" class="hidden" id="color-red" checked="">-->
<!--              <label for="color-red" style="background-color : #fc3d57"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single color end &ndash;&gt;-->
<!--            &lt;!&ndash; single color &ndash;&gt;-->
<!--            <div class="color-selector">-->
<!--              <input type="radio" name="color" class="hidden" id="color-white">-->
<!--              <label for="color-white" style="background-color : #fff"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single color end &ndash;&gt;-->
<!--            &lt;!&ndash; single color &ndash;&gt;-->
<!--            <div class="color-selector">-->
<!--              <input type="radio" name="color" class="hidden" id="color-black">-->
<!--              <label for="color-black" style="background-color : #000"-->
<!--                     class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">-->
<!--              </label>-->
<!--            </div>-->
<!--            &lt;!&ndash; single color end &ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; color filter end &ndash;&gt;-->
        <button
            class="bg-primary border border-primary text-white w-full px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition  text-sm mr-3 focus:outline-none">
          فیلتر
        </button>
      </div>
    </div>
    <!-- sidebar end -->

    <!-- products -->
    <div class="col-span-3">
      <!-- sorting -->
      <div class="mb-4 flex items-center">

        <select
            class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
          <option>Default sorting</option>
          <option>Price low-high</option>
          <option>Price high-low</option>
          <option>Latest product</option>
        </select>
        <div class="flex gap-2 ml-auto">
          <div
              class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
            <i class="fas fa-th"></i>
          </div>
          <div
              class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
            <i class="fas fa-list"></i>
          </div>
        </div>
      </div>
      <!-- sorting end -->
      <!-- product wrapper -->
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <product-item v-for="temp in temps" :key="temp" :id="temp?.id" :title="temp?.title" :image="temp?.thumbnail_url"
                              :price="temp.price" :items="temp" />

      </div>
      <!-- product wrapper end -->
    </div>
    <!-- products end -->
  </div>
</template>

<script setup>
import ProductItem from '@/components/template/productItem';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';
const route = useRoute()
const categories = computed(()=>store.getters.getFilterCategory)
const brands = computed(()=>store.getters.getFilterBrand)
const temps = computed(()=>store.getters.getTemp)
onMounted(async () => {
  // if (route.params.query){
  //
  // }else {
  await store.dispatch('generateProducts')
  await store.dispatch('generateFilterTemp',store.getters.getProducts)

  // }
  console.log(route.params.query)
})
</script>

<style scoped>

</style>
