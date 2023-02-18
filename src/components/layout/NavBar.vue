<script setup>
import logo from '@/assets/logo.png'
import image from '@/assets/logo.png'
import { mainMenu } from '@/context/menu'
import { useRouter } from 'vue-router'
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import MegaMenu from '@/components/layout/megaMenu';
import VueIcon from '@/components/output/vueIcon'
import { cart, search } from '@/assets/icon/icon';
onMounted(()=>{
  store.dispatch('generateUserInfo')
})
const toggleSearch = ref(false)
const user = computed(() => store.getters.getUserInfo)
// const image = computed(()=>store.getters.getUserInfo.image)
const router = useRouter()
const isLogin = computed(() => sessionStorage.getItem('token'))

</script>
<template>
  <nav
      class="bg-gray-900 px-2 sm:px-4 py-2 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-row  items-center justify-between mx-auto">
      <div class="flex flex-row w-[40vw] items-center gap-2">
        <button :title="name" @click="router.push('/profile')"
                class="text-[#eee] py-2 rounded-full px-2 bg-gray-700 flex flex-row gap-2 items-center justify-center"
                v-if="isLogin">
          <img :src="image" class="w-6 h-6 bg-gray-900 rounded-full" :alt="name">
          {{ user.first_name + ',' + user.last_name }}
        </button>
        <button v-if="!isLogin" @click="router.push('/login')" type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          شروع کن
        </button>
        <button  @click="router.push('/cart')" class="bg-gray-700 rounded-full ">
          <vue-icon :path="cart" width="40" height="40" class="stroke-[#eee]" view-box="0 0 416 452"/>
        </button>
        <button data-collapse-toggle="navbar-sticky" type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
        <div :class="[toggleSearch?'w-[20vw]':'w-[10vw]']"
             class="flex flex-row transition-all duration-1000 h-[2.5rem] rounded-full  items-center justify-center bg-gray-700">
          <vue-icon :path="search" class="stroke-[#eee] m-2 mx-4 cursor-pointer" width="20" height="20"
                    viewBox="0 0 26 30"/>
          <input type="text" placeholder="جستجو ..." @focus="toggleSearch=true" @blur="toggleSearch=false"
                 class="w-full outline-0 transform-all px-4 rtl h-full rounded-r-full bg-[#0000]">
        </div>
      </div>
      <a href="#" class="flex w-auto justify-center items-center">
        <img :src="logo" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">YarBimar</span>
      </a>
      <div class="flex flex-row items-center w-[40vw] justify-end order-1">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/"
                         class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white">
              Home
            </router-link>
          </li>
          <li v-for="(menu, i) in mainMenu" :key="i">
            <router-link :to="menu.path"
                         class="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent text-gray-300 md:p-0 ">
              {{ menu.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<mega-menu></mega-menu>


</template>


<style scoped>

</style>
