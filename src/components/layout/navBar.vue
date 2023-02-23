<script setup>
import logo from '@/assets/logo.png'
</script>
<template>
  <!-- header -->
  <header class="py-4 shadow-sm bg-pink-100 lg:bg-white">
    <div class="container flex items-center justify-between">
      <!-- logo -->
      <a href="#" class="block w-32 flex flex-row gap-2 justify-center items-center">
        <img :src="logo"  alt="logo" class=" w-12">
        <span class="text-xl font-semibold text-[#444]"> یار بیمار</span>
      </a>
      <!-- logo end -->

      <!-- searchbar -->
      <div class="w-full xl:max-w-sm lg:max-w-sm lg:flex relative hidden">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <i class="fas fa-search"></i>
                </span>
        <input type="text"
               class="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
               placeholder="search">
        <button type="submit"
                class="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
          جستجو
        </button>
      </div>
      <!-- searchbar end -->

      <!-- navicons -->
      <div class="space-x-4 flex items-center">
        <div class="flex items-center space-x-6 text-base capitalize w-full xl:max-w-sm lg:max-w-sm lg:flex hidden">
          <router-link to="/" class="text-gray-800 hover:text-primary transition">خانه</router-link>

          <router-link to="/about" class="text-gray-800 hover:text-primary transition">درمورد ما</router-link>
          <router-link to="/contact" class="text-gray-800 hover:text-primary transition">ارتباط با ما</router-link>
        </div>
        <a href="wishlist.html" class="block text-center text-gray-700 hover:text-primary transition relative">
                    <span
                        class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
          <div class="text-2xl">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-xs leading-3">پسندیده ها
          </div>
        </a>
        <a href="cart.html"
           class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                    <span
                        class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
          <div class="text-2xl">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="text-xs leading-3">سبد خرید</div>
        </a>
        <a href="account.html" class="block text-center text-gray-700 hover:text-primary transition">
          <div class="text-2xl">
            <i class="far fa-user"></i>
          </div>
          <div class="text-xs leading-3">حساب</div>
        </a>
      </div>
      <!-- navicons end -->

    </div>
  </header>
  <!-- header end -->

  <!-- navbar -->
  <nav class="bg-gray-800 hidden lg:block">
    <div class="container">
      <div class="flex">

        <!-- all category -->
        <div class="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                    <span class="text-white">
                        <i class="fas fa-bars"></i>
                    </span>
          <span class="capitalize ml-2 text-white">دسته بندی ها</span>

          <div class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
            <!-- single category -->
            <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
              <span class="ml-6 text-gray-600 text-sm">دسته</span>
            </a>
            <!-- single category end -->
          </div>
        </div>
        <!-- all category end -->

        <!-- nav menu -->
        <div class="flex items-center justify-between flex-grow pl-12">
          <div class="flex items-center space-x-6 text-base capitalize">
            <a href="#" class="text-gray-200 hover:text-white transition">زیردسته</a>
            <a href="#" class="text-gray-200 hover:text-white transition">زیردسته</a>
            <a href="#" class="text-gray-200 hover:text-white transition">زیردسته</a>
            <a href="#" class="text-gray-200 hover:text-white transition">زیردسته</a>
          </div>
          <router-link to="/login" class="ml-auto text-sm w-24 h-8 bg-blue-500 p-2 rounded-lg justify-self-end justify-items-center text-gray-200 hover:text-white transition">
            ! بزن بریم
          </router-link>
        </div>
        <!-- nav menu end -->

      </div>
    </div>
  </nav>
  <!-- navbar end -->

  <!-- mobile menubar -->
  <div
      class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
    <a href="javascript:void(0)" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl" id="menuBar">
        <i class="fas fa-bars"></i>
      </div>
      <div class="text-xs leading-3">Menu</div>
    </a>
    <a href="#" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl">
        <i class="fas fa-list-ul"></i>
      </div>
      <div class="text-xs leading-3">Category</div>
    </a>
    <a href="#" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl">
        <i class="fas fa-search"></i>
      </div>
      <div class="text-xs leading-3">Search</div>
    </a>
    <a href="cart.html" class="text-center text-gray-700 hover:text-primary transition relative">
            <span
                class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
      <div class="text-2xl">
        <i class="fas fa-shopping-bag"></i>
      </div>
      <div class="text-xs leading-3">Cart</div>
    </a>
  </div>
  <!-- mobile menu end -->

  <!-- mobile sidebar menu -->
  <div class="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow hidden" id="mobileMenu">
    <div class="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
      <div id="closeMenu"
           class="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer">
        <i class="fas fa-times"></i>
      </div>
      <!-- navlink -->
      <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
      <div class="">
        <a href="index.html" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
          Home
        </a>
        <a href="shop.html" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
          Shop
        </a>
        <a href="#" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
          About Us
        </a>
        <roa href="#" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
          Contact Us
        </roa>
      </div>
      <!-- navlinks end -->
    </div>
  </div>
  <!-- mobile sidebar menu end -->

</template>



<style scoped>

</style>
