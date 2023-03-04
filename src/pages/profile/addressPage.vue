<script setup>
import { computed, onMounted, ref } from 'vue';
import { deleteIcon, editIcon } from '@/assets/icon';
import store from '@/store';
import SideBar from '@/components/template/sideBar';
import VueIcon from '@/components/output/vueIcon';
import PopUp from '@/components/output/popUp';
import ProvinceInput from '@/components/input/provinceInput';
import CityInput from '@/components/input/cityInput';

const deleteAddress = async (e) => {
  await store.dispatch('deleteAddress', e).then(() => {
    store.dispatch('generateAddress')
  })
}
const editAddress = (e) => {
  store.dispatch('generateUpdateAddress', e)
}
// const addAddress = (e) => {
//   store.dispatch('appendAddress', e)
// }
const addPop = ref(false)
const pi = ref(1)
const addressData = ref({
  first_name: '',
  last_name: '',
  receiver_phone: '',
  state: '',
  city: '',
  address: '',
  building_number: 0,
  unit_number: 0,
  zip_code: ''
})
const append = () => {

    store.dispatch('appendAddress',
        {
            address: addressData.value.address,
            state: addressData.value.state,
            city: addressData.value.city,
            building_number: addressData.value.building_number,
            unit_number: addressData.value.unit_number,
            zip_code: addressData.value.zip_code,
            receiver_first_name: addressData.value.receiver_first_name,
            receiver_last_name: addressData.value.receiver_last_name,
            receiver_phone: addressData.value.receiver_phone
          }).then(()=>store.dispatch('generateAddress'))

}
const address = computed(() => store.getters.getAddress)
onMounted(() => {
  store.dispatch('generateAddress')
})

const setProv = (e) => {
  console.log(e)
  pi.value=e.id
  addressData.value.state=e.name
}
const setCity = (e) => {
  console.log(e)
  addressData.value.city=e.name
}
</script>
<template>
  <!-- breadcrum -->
  <div class="flex flex-row-reverse items-center justify-between">
    <div class="py-4 container rtl flex gap-3 items-center">
      <router-link to="/" class="text-primary text-base">
        <i class="fas fa-home"></i>
      </router-link>
      <span class="text-sm text-gray-400"><i class="fas fa-chevron-right rotate-180"></i></span>
      <p class="text-gray-600 font-semibold uppercase">حساب من</p>
    </div>
    <button @click="addPop=true" class="ml-8 block min-w-24 rounded-xl bg-primary text-white h-10 p-2 px-4">افزودن</button>
  </div>
  <!-- breadcrum end -->

  <!-- account wrapper -->
  <div class="container rtl lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <!-- sidebar -->
    <side-bar></side-bar>
    <!-- sidebar end -->
    <!--    add address -->
    <pop-up :disable="addPop" class="flex z-20 flex-row h-screen items-center justify-center" :close="()=>{addPop=false}">
      <div class="col-span-9 z-20 shadow bg-white w-1/2 rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <div>
          <h3 class="text-lg font-medium capitalize mb-4">
            افزودن
          </h3>
          <div class="space-y-4">
            <!-- Form row -->
            <div class="grid sm:grid-cols-2 gap-4">
              <!-- Single input -->
              <div>
                <label class="text-gray-600 mb-2 block">
                  نام
                </label>
                <input type="text" class="input-box" v-model="addressData.receiver_first_name">
              </div>
              <!-- single input end -->
              <!-- single input -->
              <div>
                <label class="text-gray-600 mb-2 block">
                  نام خانوادگی
                </label>
                <input type="text" class="input-box" v-model="addressData.receiver_last_name">
              </div>
              <!-- Single input end -->
            </div>
            <!-- Form row end -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="text-gray-600 mb-2 block">
                  استان
                </label>
                <province-input @action="setProv"/>
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  شهر
                </label>
                <city-input :province_id="pi" @action="setCity"/>
              </div>
            </div>
            <div class="grid sm:grid-cols-3 gap-4">
              <div>
                <label class="text-gray-600 mb-2 block">
                  پلاک
                </label>
                <input type="number"  class="input-box" v-model="addressData.building_number">
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  واحد
                </label>
                <input type="number"  class="input-box" v-model="addressData.unit_number">

              </div>
              <div>
                <label class="text-gray-600 mb-2 block">
                  کد پستی
                </label>
                <input type="text" class="input-box" v-model="addressData.zip_code">

              </div>
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                آدرس
              </label>
              <input type="text" class="input-box" v-model="addressData.address">
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">
                همراه
              </label>
              <input type="text" class="input-box" v-model="addressData.receiver_phone">
            </div>
          </div>
          <div class="mt-6">
            <button @click="append" type="submit" class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
              افزودن
            </button>
          </div>
        </div>
      </div>
    </pop-up>
    <!--    add address end -->
    <!-- account content -->

    <div class="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
      <!-- single card -->
      <div v-for="(adrs,i) in address" :key="i" class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex justify-between items center mb-4">
          <h3 class="font-medium capitalize text-gray-800 text-lg">
            {{ adrs?.receiver_first_name + ',' + adrs?.receiver_last_name }}</h3>
          <p class="text-primary flex flex-row gap-1">
            <button @click="editAddress(adrs.id)"
                    class="font-medium text-red-500 p-2 bg-blue-400 rounded-lg dark:text-red-500  hover:underline">
              <vue-icon :path="editIcon" width="20" height="20" class="stroke-cyan-50" viewBox="0 0 20 20"/>
            </button>
            <button @click="deleteAddress(adrs.id)"
                    class="font-medium text-red-500 p-2 bg-red-200 rounded-lg dark:text-red-500 hover:underline">
              <vue-icon :path="deleteIcon" width="20" height="20" class="stroke-red-500" viewBox="0 0 20 20"/>
            </button>
          </p>
        </div>
        <div class="space-y-1">
          <p class="text-gray-800 flex flex-row items-center justify-between font-medium"><span class="text-slate-700">مکان</span>{{
              adrs?.state
            }}, {{ adrs?.city }}</p>
          <p class="text-gray-800 flex flex-row items-center justify-between"><span
              class="text-slate-700">آدرس</span>{{ adrs?.address }}</p>
          <p class="text-gray-800 flex flex-row items-center justify-between"><span class="text-slate-700">همراه</span>{{
              adrs?.receiver_phone
            }}</p>
          <p class="text-gray-800 flex flex-row items-center justify-between"><span
              class="text-slate-700">کد پستی</span>{{ adrs?.zip_code }}</p>
          <p class="text-gray-800 flex flex-row items-center justify-between"><span
              class="text-slate-700">پلاک</span>{{ adrs?.building_number }}</p>
          <p class="text-gray-800 flex flex-row items-center justify-between"><span
              class="text-slate-700">واحد</span>{{ adrs?.unit_number }}</p>

        </div>
      </div>
      <!-- single card end -->
    </div>
    <!-- account content end -->
  </div>
  <!-- account wrapper end -->

</template>

<style scoped>

</style>
