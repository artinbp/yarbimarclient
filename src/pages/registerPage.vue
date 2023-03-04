<template>
  <div class="mt-20">
    <div class="container py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase  mb-1">
          ثبت نام
        </h2>
        <p class="text-gray-600 mb-6 text-sm">
          تجربه ی یه دنیا جدید رو بساز؟

        </p>
        <form class="rtl" action="">
          <div class="space-y-4">
            <div>
              <label class="text-gray-600 mb-2 block">
                نام کاربری <span class="text-primary">*</span>
              </label>
              <input type="text" v-model="payload.username" class="input-box" placeholder="John_doe">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                نام <span class="text-primary">*</span>
              </label>
              <input type="text" v-model="payload.first_name" class="input-box" placeholder="John">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                نام خانوادگی <span class="text-primary">*</span>
              </label>
              <input type="text" v-model="payload.last_name" class="input-box" placeholder="Doe">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                پست الکترونیک <span class="text-primary">*</span>
              </label>
              <input type="email" v-model="payload.email" class="input-box" placeholder="example@mail.com">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block"> کلمه عبور <span class="text-primary">*</span></label>
              <div class="flex flex-row w-full h-12 p-0 input-box">
                <vue-icon @click="passtypeA=!passtypeA" :path="passtypeA?eye_close:eye_open" width="46" height="29"
                          viewBox="0 0 20 20" fill="none" style="stroke: #2c3e50"
                          class="w-12 cursor-pointer h-12 active:bg-[#fefefe] rounded-r-lg p-2"/>
                <input :type="passtypeA?'text ':'password'" id="password" v-model="payload.password"
                       class="w-full border-[#0000] rounded-l-0" placeholder="type password">
              </div>
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">تایید کلمه عبور
                <span class="text-primary">*</span>
              </label>
              <div class="flex flex-row w-full h-12 p-0 input-box">
                <vue-icon @click="passtypeB=!passtypeB" :path="passtypeB?eye_close:eye_open" width="46" height="29"
                          viewBox="0 0 20 20" fill="none" style="stroke: #2c3e50"
                          class="w-12 cursor-pointer h-12 active:bg-[#fefefe] rounded-r-lg p-2"/>
                <input :type="passtypeB?'text ':'password'" id="repassword" v-model="payload.password_confirmation"
                       class="w-full border-[#0000] rounded-l-0" placeholder="type password">
              </div>
            </div>
          </div>
          <div class="flex items-center mt-6">
            <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">
              من مطالعه کرده و میپذیرم،
              <a href="#" class="text-primary"> قوانین و ساختار را</a>
            </label>
            <input type="checkbox" id="agreement" v-model="rules" class="text-primary focus:ring-0 rounded-sm cursor-pointer">
          </div>
          <div class="mt-4">
            <button @click.prevent="login" type="button"
                    class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium">
              به ما ملحق شو
            </button>
          </div>
        </form>
        <!-- login with social -->
        <!-- login with social end -->
        <p class="mt-4 text-gray-600 text-center">
          از دوستان قدیمی هستی؟ <router-link to="/register" class="text-primary">ورود</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import store from '@/store';
import router from '@/router';
import VueIcon from '@/components/output/vueIcon';
import { eye_close, eye_open } from '@/assets/icon/';

const rules = ref(false)
const passtypeA = ref(false)
const passtypeB = ref(false)
const payload = ref({
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  addresses: []
})
console.log(payload)
const login = async () => {
  if (rules.value){
    await store.dispatch('generateRegister', payload.value)
    await store.dispatch('generateUserInfo')
    await router.push('/')
  }
}
</script>

<style scoped>

</style>
