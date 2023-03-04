<script setup>
import logo from '@/assets/logo.png'
import { computed, ref, watch } from 'vue';
import {useRoute} from 'vue-router'
import store from '@/store';
const route = useRoute()
const path = ref(route?.name)
const user = computed(()=>store.getters.getUser)
watch(() => path.value=route?.name, () => {
  console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);
});
const logout = () => {
  store.dispatch('generateLogOut')
}
</script>

<template>
  <div class="col-span-3">
    <!-- account profile -->
    <div class="px-4 py-3 shadow flex items-center gap-4">
      <div class="flex-shrink-0">
        <img :src="logo" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover">
      </div>
      <div>
        <p class="text-gray-600">سلام</p>
        <h4 class="text-gray-800 capitalize font-medium">{{ user.first_name+','+user.last_name }}</h4>
      </div>
    </div>
    <!-- account profile end -->

    <!-- profile links -->
    <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
      <!-- single link -->
      <div class="space-y-1 pl-8">
        <router-link to="/account"
                     :class="[route?.path==='/account'?'text-primary':'']"
           class="relative text-base font-medium capitalize hover:text-primary transition block">
          اطلاعات حساب
          <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
        </router-link>
        <router-link :class="[route?.path==='/address'?'text-primary':'']" to="/address" class="hover:text-primary transition capitalize block ">مدیریت آدرس</router-link>
        <router-link :class="[route?.path==='/change-password'?'text-primary':'']" to="/change-password" class="hover:text-primary transition capitalize block">تعویض رمز</router-link>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="space-y-1 pl-8 pt-4">
        <router-link :class="[route?.path==='/change-password'?'text-primary':'']" to="/change-password" class="hover:text-primary transition capitalize block">تعویض رمز</router-link>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="space-y-1 pl-8 pt-4">
        <a href="#"
           class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
          پرداختی ها
          <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-credit-card"></i>
                        </span>
        </a>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="pl-8 pt-4">
        <router-link :class="[route?.path==='/wish-list'?'text-primary':'']" to="/change-password" class="hover:text-primary transition capitalize block">پسند ها
          <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-heart"></i>
                        </span>
        </router-link>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="pl-8 pt-4">
        <a @click="logout"
           class="relative medium capitalize text-red-800 font-medium hover:text-primary transition block">
          خروج
          <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>
        </a>
      </div>
      <!-- single link end -->
    </div>
    <!-- profile links end -->
  </div>
</template>

<style scoped>

</style>
