<template>
<div class="mt-20 flex flex-row">
  <div class="container py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase  mb-1">
        ورود
      </h2>
      <p class="text-gray-600 mb-6 text-sm">
        ورود به دنیایی از سلامتی
      </p>
      <form action="" class="rtl">
        <div class="space-y-4">
          <div>
            <label class="text-gray-600 mb-2 block">
              پست الکترونیک <span class="text-primary">*</span>
            </label>
            <input type="email" v-model="username" class="input-box" placeholder="example@mail.com">
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> کلمه عبور <span class="text-primary">*</span></label>
            <div class="flex flex-row w-full h-12 p-0 input-box">
              <vue-icon @click="passtype=!passtype" :path="passtype?unseen:eye" width="46" height="29" viewBox="0 0 46 29" fill="none" class="w-12 cursor-pointer h-12 active:bg-[#fefefe] rounded-r-lg p-2" />
              <input :type="passtype?'text ':'password'" id="password" v-model="password" class="w-full border-[#0000] rounded-l-0" placeholder="type password">
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mt-6">
          <a href="#" class="text-primary">فراموشی کلمه عبور؟</a>
        </div>
        <div class="mt-4">
          <button @click="login" type="submit" class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium">
            بزن بریم!
          </button>
        </div>
      </form>

      <!-- login with social -->
<!--      <div class="mt-6 flex justify-center relative">-->
<!--        <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>-->
<!--        <div class="text-gray-600 uppercase px-3 bg-white relative z-10">-->
<!--          OR LOGIN IN WITH-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mt-4 flex gap-4">-->
<!--        <a href="#" class="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm">-->
<!--          Facebook-->
<!--        </a>-->
<!--        <a href="#" class="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm">-->
<!--          Google-->
<!--        </a>-->
<!--      </div>-->
      <!-- login with social end -->

      <p class="mt-4 text-gray-600 text-center">
        حسابی دارید؟ <router-link to="/register" class="text-primary">ثبت نام
      </router-link>
      </p>
    </div>
  </div>
</div>
</template>

<script setup>
import store from '@/store';
import { ref } from 'vue';
import VueIcon from '@/components/output/vueIcon';
import {eye, unseen} from '@/assets/icon/icon';
import router from '@/router';

const username = ref()
const passtype = ref(false)
const password = ref()
const login = async () => {
 await store.dispatch('generateUserLogin',{username: username.value, password: password.value})
  await router.push('/')
}
</script>

<style scoped>
</style>
