<template>
  <div class="mt-20 flex flex-row">
    <div class="container py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl font-bold mb-1">
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
              <input type="email" v-model="userData.email" class="input-box" placeholder="example@mail.com">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block"> کلمه عبور <span class="text-primary">*</span></label>
              <div class="flex flex-row w-full h-12 p-0 input-box">
                <vue-icon @click="passtype=!passtype" :path="passtype?eye_close:eye_open" width="46" height="29"
                          viewBox="0 0 20 20" fill="none" style="stroke: #2c3e50"
                          class="w-12 cursor-pointer h-12 active:bg-[#fefefe] rounded-r-lg p-2"/>
                <input :type="passtype?'text ':'password'" id="password" v-model="userData.password"
                       class="w-full border-[#0000] rounded-l-0" placeholder="type password">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between mt-6">
            <a href="#" class="text-primary">فراموشی کلمه عبور؟</a>
          </div>
          <div class="mt-4">
            <button @click="login" type="submit"
                    class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium">
              بزن بریم!
            </button>
          </div>
        </form>
        <p class="mt-4  text-center">
          <span class="text-gray-600">  حسابی دارید؟ </span>
          <router-link to="/register" class=" text-primary hover:text-blue-500">ثبت نام
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
import { eye_close, eye_open } from '@/assets/icon/';
import router from '@/router';

const passtype = ref(false)
const userData = ref({
  email: '',
  password: ''
})
const login = async () => {
  await store.dispatch('generateLogin', { email: userData.value.email, password: userData.value.password })
  await router.push('/')
}
</script>

<style scoped>

</style>
