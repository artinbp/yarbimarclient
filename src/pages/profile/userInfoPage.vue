<script setup>
import { ref } from 'vue';
import store from '@/store';
import SideBar from '@/components/template/sideBar';

const user = ref(store.getters.getUser)

</script>
<template>
  <!-- breadcrum -->
  <div class="py-4 container rtl flex gap-3 items-center">
    <router-link to="/" class="text-primary text-base">
      <i class="fas fa-home"></i>
    </router-link>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right rotate-180"></i></span>
    <p class="text-gray-600 font-semibold uppercase">حساب من</p>
  </div>
  <!-- breadcrum end -->

  <!-- account wrapper -->
  <div class="container rtl lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <!-- sidebar -->
      <side-bar></side-bar>
    <!-- sidebar end -->

    <!-- account content -->
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
      <form action="">
        <h3 class="text-lg font-medium capitalize mb-4">
          اطلاعات حساب
        </h3>
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block">
                نام
              </label>
              <p  class="input-box">{{ user.first_name||'' }}</p>
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                نام خانوادگی
              </label>
              <p  class="input-box">{{ user?.last_name }}</p>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block">
                تاریخ  ساخت
              </label>

              <p  class="input-box">{{ user?.created_at }}</p>
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                سطح کاربری
              </label>
              <p  class="input-box">{{ user?.role?.name }}</p>

            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block">
                پست الکترونیک
              </label>
              <p  class="input-box">{{ user?.email }}</p>
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                نام کاربری
              </label>
              <p  class="input-box">{{ user?.username }}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- account content end -->
  </div>
  <!-- account wrapper end -->

</template>

<style scoped>

</style>
