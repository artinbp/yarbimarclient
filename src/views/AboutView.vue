<script setup>
import logo from '@/assets/logo.png'
</script>
<template>
  <div class="about">
    <div class="flex flex-row-reverse justify-between -translate-y-3">
      <img alt="Vue logo" class="w-[40rem] rounded-bl-[22rem]" src="../assets/images/pic2.jpg" >
      <div class="flex flex-col w-[34rem] gap-4 py-24 p-8 justify-start text-left">
        <img :src="logo" class="h-[200px] w-[200px]  " alt="Flowbite Logo">
        <h1 class="text-[60px] font-semibold">
          Yar Bimar
        </h1>
        <p class="text-[30px]">
          Yar Bimar is an doctor online to help people for bay medical product
        </p>
        <button class="text-[#eee] rounded-lg w-[10rem] p-2 px-4 bg-[#2143f2]">try it</button>
      </div>
    </div>
  </div>
</template>
