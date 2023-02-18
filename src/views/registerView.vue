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
              <input type="text" class="input-box" placeholder="John_doe">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                نام <span class="text-primary">*</span>
              </label>
              <input type="text" class="input-box" placeholder="John">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                نام خانوادگی <span class="text-primary">*</span>
              </label>
              <input type="text" class="input-box" placeholder="Doe">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                پست الکترونیک <span class="text-primary">*</span>
              </label>
              <input type="email" class="input-box" placeholder="example@mail.com">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">کلمه عبور <span class="text-primary">*</span></label>
              <input type="password" class="input-box" placeholder="*******">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">تایید کلمه عبور
                <span class="text-primary">*</span>
              </label>
              <input type="password" class="input-box" placeholder="*******">
            </div>
          </div>
          <div class="flex items-center mt-6">
            <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">
              من مطالعه کرده و میپذیرم،
              <a href="#" class="text-primary"> قوانین و ساختار را</a>
            </label>
            <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer">
          </div>
          <div class="mt-4">
            <button type="submit"
                    class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium">
              به ما ملحق شو
            </button>
          </div>
        </form>
        <!-- login with social -->
        <!-- login with social end -->
        <p class="mt-4 text-gray-600 text-center">
          از دوستان قدیمی هستی؟ <a href="login.html" class="text-primary">ورود</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

<style scoped>

</style>
